import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { MediaFormData } from '../types/media';
import { createMedia, deleteMedia, updateMedia } from '../services/mediaService';

export const useCreateMedia = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: MediaFormData) => createMedia(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['media'] });
        },
    });
};

export const useUpdateMedia = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...data }: { id: string } & MediaFormData) => updateMedia(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['media'] });
        },
    });
};

export const useDeleteMedia = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteMedia(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['media'] });
        },
    });
};