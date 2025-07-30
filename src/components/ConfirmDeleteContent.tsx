
type ConfirmDeleteContentProps = {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    loading?: boolean;
    onConfirm: () => void | Promise<void>;
    onCloseModal: () => void; // injected by Modal.Window
};

export default function ConfirmDeleteContent({
    title = "Delete this item?",
    message = "This action cannot be undone.",
    confirmText = "Delete",
    cancelText = "Cancel",
    loading = false,
    onConfirm,
    onCloseModal,
}: ConfirmDeleteContentProps) {
    return (
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{message}</p>

            <div className="mt-6 flex items-center justify-end gap-3">
                <button
                    type="button"
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 disabled:opacity-60"
                    onClick={onCloseModal}
                    disabled={loading}
                >
                    {cancelText}
                </button>
                <button
                    type="button"
                    className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
                    onClick={() => onConfirm(onCloseModal)}
                    disabled={loading}
                >
                    {loading ? "Deleting..." : confirmText}
                </button>
            </div>
        </div>
    );
}
