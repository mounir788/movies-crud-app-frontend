import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import type { Media } from '../types/media';
import { useUpdateMedia } from '../hooks/useMedia';
import Form from './Form';

const mediaSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  type: z.enum(['Movie', 'TV Show']),
  director: z.string().min(1, 'Director is required'),
  budget: z.string().min(1, 'Budget is required'),
  location: z.string().min(1, 'Location is required'),
  duration: z.string().min(1, 'Duration is required'),
  year: z.string().min(1, 'Year/Time is required'),
});

type MediaFormData = z.infer<typeof mediaSchema>;

interface EditMediaFormProps {
  media: Media;
  onClose: () => void;
}

const EditMediaForm = ({ media, onClose }: EditMediaFormProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<MediaFormData>({
    resolver: zodResolver(mediaSchema),
    defaultValues: media,
  });

  const updateMedia = useUpdateMedia();

  useEffect(() => {
    reset(media);
  }, [media, reset]);

  const onSubmit = (data: MediaFormData) => {
    updateMedia.mutate({ id: media.id, ...data }, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Media</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Form register={register} errors={errors} />


          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 disabled:opacity-60"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMediaForm;