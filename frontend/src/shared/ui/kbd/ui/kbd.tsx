interface Props {
    onClick: () => void;
}

// UI компоненты для переключения слайдов 

export const Prev: React.FC<Props> = ({ onClick }) => {
    return (
        <kbd
            className="kbd cursor-pointer w-14 h-14 md:w-16 md:h-16"
            onClick={onClick}
        >
            ◀︎
        </kbd>
    );
};
export const Next: React.FC<Props> = ({ onClick }) => {
    return (
        <kbd
            className="kbd cursor-pointer w-14 h-14 md:w-16 md:h-16"
            onClick={onClick}
        >
            ▶︎
        </kbd>
    );
};
