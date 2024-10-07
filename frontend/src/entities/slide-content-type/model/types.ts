export interface Slide {
    type_slide: string;
    type_content: string[];
    text: string;
    img: string;
}

export interface QuizData {
    slides: Slide[];
}
