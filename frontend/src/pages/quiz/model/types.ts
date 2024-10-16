interface Image {
    url: string;
}
export interface Slide {
    id: number;
    number: number;
    text: string;
    type_slide: string;
    img: Image[];
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
