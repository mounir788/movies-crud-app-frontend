import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchMedia } from '../services/mediaService';
import MediaTable from './MediaTable';

// import Spinner from './Spinner';

const MediaList = () => {
    const { ref, inView } = useInView();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['media'],
        queryFn: fetchMedia,
        getNextPageParam: (lastPage) => {
            if (lastPage.data.length < 10) return undefined;
            return lastPage.page + 1;
        },
        initialPageParam: 1,
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    if (status === 'pending') {
        return
        <div>Loading...</div>;
    }

    if (status === 'error') {
        return <div>Error: {error.message}</div>;
    }

    const allMedia = data.pages.flatMap(page => page.data);

    return (
        <div className="mt-8">
            <MediaTable media={allMedia} />
            <div ref={ref} className="h-10 flex justify-center items-center">
                {isFetchingNextPage ? <div>Loading...</div> : null}
            </div>
        </div>
    );
};

export default MediaList;