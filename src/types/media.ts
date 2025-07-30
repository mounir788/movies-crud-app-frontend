export interface Media {
    id: string;
    title: string;
    type: 'Movie' | 'TV Show';
    director: string;
    budget: string;
    location: string;
    duration: string;
    year: string;
}

export type MediaFormData = Omit<Media, 'id'>;