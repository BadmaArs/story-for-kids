import { RootState } from "@/app/store";

export const selectBookmark = (state: RootState) =>
    state.bookmark.bookmarkMaterials;
