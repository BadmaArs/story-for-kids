interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface Slide {
    type_slide: string;
    text?: string;
    media?: string;
    questions?: Question[] | null;
}

export interface QuizData {
    slides: Slide[];
}
