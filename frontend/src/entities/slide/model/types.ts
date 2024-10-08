import { Slide } from "@/entities/slide-content-type";
import { Lesson } from "@/entities/topic/model/types";


export interface CurrentQuiz {
    currentQuiz: Lesson;
    slides: Slide[]
}
