import { useState } from "react";
import { useDeleteMedia } from "../hooks/useMedia";
import type { Media } from "../types/media";
import EditMediaForm from "./EditMediaForm";
import Modal from "./Modal"; // <-- your modal file
import ConfirmDeleteContent from "./ConfirmDeleteContent";

interface MediaTableProps {
    media: Media[];
}

const MediaTable = ({ media }: MediaTableProps) => {
    const [editingMedia, setEditingMedia] = useState<Media | null>(null);
    const [mediaToDelete, setMediaToDelete] = useState<Media | null>(null);

    // Adjust to your hook's API (isLoading vs isPending, mutate vs mutateAsync)
    const { mutateAsync: deleteMediaAsync, isPending: isDeleting } = useDeleteMedia();

    const handleConfirmDelete = (onCloseModal) => {
        if (!mediaToDelete) return;
        deleteMediaAsync(mediaToDelete.id, {
            onSuccess: () => {
                setMediaToDelete(null);
                onCloseModal()
            } // close after success
        });

    };

    return (
        <Modal>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Type</th>
                            <th className="py-2 px-4 border">Director</th>
                            <th className="py-2 px-4 border">Budget</th>
                            <th className="py-2 px-4 border">Location</th>
                            <th className="py-2 px-4 border">Duration</th>
                            <th className="py-2 px-4 border">Year/Time</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {media.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border">{item.title}</td>
                                <td className="py-2 px-4 border">{item.type}</td>
                                <td className="py-2 px-4 border">{item.director}</td>
                                <td className="py-2 px-4 border">{item.budget}</td>
                                <td className="py-2 px-4 border">{item.location}</td>
                                <td className="py-2 px-4 border">{item.duration}</td>
                                <td className="py-2 px-4 border">{item.year}</td>
                                <td className="py-2 px-4 border">
                                    <button
                                        onClick={() => setEditingMedia(item)}
                                        className="mr-2 text-blue-600 hover:text-blue-800"
                                    >
                                        Edit
                                    </button>

                                    {/* Wrap Delete with your Modal.Open */}
                                    <Modal.Open opens="confirm-delete">
                                        <button
                                            onClick={() => setMediaToDelete(item)} // called first, then Modal.Open opens the window
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </Modal.Open>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {
                    media.length === 0 && <h2 className="px-4 py-8 text-center text-2xl w-full">No data available.</h2>
                }
            </div>

            {editingMedia && (
                <EditMediaForm media={editingMedia} onClose={() => setEditingMedia(null)} />
            )}

            {/* Place Modal provider and window (can also wrap the whole table if you prefer) */}
            <Modal.Window name="confirm-delete">
                <ConfirmDeleteContent
                    title="Delete this item?"
                    message={
                        mediaToDelete
                            ? `This will permanently delete “${mediaToDelete.title}”.`
                            : "This action cannot be undone."
                    }
                    confirmText="Delete"
                    loading={isDeleting}
                    onConfirm={handleConfirmDelete}
                />
            </Modal.Window>
        </Modal>
    );
};

export default MediaTable;
