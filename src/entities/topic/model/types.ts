export interface Lesson {
    id: number;
    book_name: string;
    lessons: Lessons[];
}

export interface LessonsData {
    data: Lesson;
}

export interface Lessons {
    id: 4;
    lesson_name: string;
}
