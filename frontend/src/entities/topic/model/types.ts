export interface Lesson {
    id: number | null;
    title: string | null;
    body: string | null;
}
export interface LessonsState {
    lessons: Lesson[];
    loading: boolean;
    error: string | null;
}
