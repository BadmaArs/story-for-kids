import { RootState } from "@/app/store";

export const selectIndexCurrentSlide = (state: RootState) =>
    state.indexCurrentSlide.indexCurrentSlide;
