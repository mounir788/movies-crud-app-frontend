import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCreateMedia } from '../hooks/useMedia';
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

const AddMediaForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<MediaFormData>({
    resolver: zodResolver(mediaSchema),
  });

  const createMedia = useCreateMedia();

  const onSubmit = (data: MediaFormData) => {
    createMedia.mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Add New Media</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Form register={register} errors={errors} />

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Media
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMediaForm;