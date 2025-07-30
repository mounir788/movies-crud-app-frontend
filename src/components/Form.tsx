
const Form = ({ register, errors }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    {...register('title')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                    {...register('type')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                >
                    <option value="Movie">Movie</option>
                    <option value="TV Show">TV Show</option>
                </select>
                {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Director</label>
                <input
                    {...register('director')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.director && <p className="text-red-500 text-sm">{errors.director.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <input
                    {...register('budget')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.budget && <p className="text-red-500 text-sm">{errors.budget.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                    {...register('location')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                    {...register('duration')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Year/Time</label>
                <input
                    {...register('year')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.year && <p className="text-red-500 text-sm">{errors.year.message}</p>}
            </div>
        </div>
    )
}

export default Form