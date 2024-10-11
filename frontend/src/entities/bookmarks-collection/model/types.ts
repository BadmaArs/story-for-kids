export interface BookmarkMaterial {
    link: string;
    lessonName: string | null;
    numberSlide: number;
}
export interface BookmarkMaterialArray {
    bookmarkMaterials: BookmarkMaterial[];
}
