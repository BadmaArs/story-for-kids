export interface Image {
    url: string;
}
export interface LessonName {
    lesson_name: string;
}
export interface Slide {
    id: number;
    number: number;
    text: string;
    type_slide: string;
    img: Image[];
    lesson: LessonName;
}
export interface Slides {
    data: Slide[];
    meta: {
        pagination: {
            page: number;
            pageCount: number;
            pageSize: number;
            total: number;
        };
    };
}
