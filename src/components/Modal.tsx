import {
    cloneElement,
    createContext,
    useContext,
    useEffect,
    useState,
    ReactElement,
    ReactNode,
} from "react";

type ModalContextType = {
    openName: string;
    open: (name: string) => void;
    close: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: { children: ReactNode }) {
    const [openName, setOpenName] = useState("");

    const open = (name: string) => setOpenName(name);
    const close = () => setOpenName("");

    // Optional: lock page scroll while any modal is open
    useEffect(() => {
        const original = document.body.style.overflow;
        if (openName) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [openName]);

    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({
    children,
    opens: opensWindowName,
}: {
    children: ReactElement;
    opens: string;
}) {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("Modal.Open must be used inside <Modal>");
    const { open } = ctx;

    return cloneElement(children, {
        onClick: (e: React.MouseEvent) => {
            e?.stopPropagation();
            // preserve any existing click handler
            children.props?.onClick?.(e);
            open(opensWindowName);
        },
    });
}

function Window({
    children,
    name,
    closeOnOverlay = true,
    blur = true,
    maxWidth = "max-w-md",
}: {
    children: ReactElement;
    name: string;
    /** Click outside dialog closes it */
    closeOnOverlay?: boolean;
    /** Apply backdrop blur */
    blur?: boolean;
    /** Tailwind max-width class for the dialog box */
    maxWidth?: string;
}) {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("Modal.Window must be used inside <Modal>");
    const { openName, close } = ctx;

    if (name !== openName) return null;

    const overlayClasses =
        "fixed inset-0 z-[999] flex items-center justify-center bg-black/20 " +
        (blur ? "backdrop-blur-sm" : "");

    return (
        <div
            className={overlayClasses}
            role="dialog"
            aria-modal="true"
            onMouseDown={(e) => {
                if (closeOnOverlay && e.target === e.currentTarget) close();
            }}
        >
            {/* Dialog container */}
            <div
                className={`mx-4 w-full ${maxWidth} outline-none`}

                onMouseDown={(e) => e.stopPropagation()} // prevent overlay close when clicking inside
            >
                {cloneElement(children, { onCloseModal: close })}
            </div>
        </div>
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
