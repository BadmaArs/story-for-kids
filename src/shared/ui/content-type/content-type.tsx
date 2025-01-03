import { useEffect } from "react";
// import ReactPlayer from "react-player";
import "./content-type.css";
import { marked } from "marked";
import { Slides } from "@/entities/slide/model/types";
import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { selectIndexImage } from "@/features/quiz-navigation/model/selectors";
import { setIndexCurrentImage } from "@/features/quiz-navigation/model/slice";

type SlidesData = Omit<Slides, "meta">;

export const ContentImage: React.FC<SlidesData> = ({ data }) => {
    return (
        <div className="flex w-full flex-col border-opacity-50">
            <div className="card bg-base-300 rounded-box grid h-auto place-items-center">
                <img
                    alt="Tailwind CSS examples"
                    src={`https://kalmykhistory.ru/strapi` + data[0].img[0].url}
                />
            </div>
        </div>
    );
};

export const ContentTextAndImage: React.FC<SlidesData> = ({ data }) => {
    const dispatch = useAppDispatch();
    const currentIndexImage = useAppSelector(selectIndexImage);

    const getHTML = () => {
        const html = marked(data[0].text);
        return { __html: html };
    };
    useEffect(() => {
        if (data[0]?.img?.length === 1) {
            dispatch(setIndexCurrentImage(0));
        }
    }, [data, dispatch]);

    const handleIndex = (index: number) => {
        dispatch(setIndexCurrentImage(index));
    };
    return (
        <>
            <div className="flex w-full flex-col border-opacity-50 md:flex-row md:gap-3">
                <div className="card bg-base-300 rounded-box grid h-auto place-items-center md:w-1/2 md:px-3">
                    <div className="carousel">
                        <div id="item1" className="carousel-item w-full">
                            {data[0]?.img?.length > 0 &&
                                data[0].img[currentIndexImage] && (
                                    <img
                                        src={
                                            `https://kalmykhistory.ru/strapi` +
                                            data[0].img[currentIndexImage].url
                                        }
                                        className="w-full"
                                    />
                                )}
                        </div>
                    </div>
                    {data[0]?.img?.length > 1 ? (
                        <div className="flex w-full justify-center gap-2 py-2">
                            {data[0].img.map((_, index) => (
                                <div
                                    className={`btn btn-xs ${index === currentIndexImage ? "btn-active" : ""}`}
                                    key={index}
                                    onClick={() => handleIndex(index)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="divider"></div>
                <div className="card bg-base-300 rounded-box grid h-auto place-items-center p-2 md:w-1/2">
                    <div
                        className="text-2xl"
                        dangerouslySetInnerHTML={getHTML()}
                    ></div>
                </div>
            </div>
        </>
    );
};

// export const ContentVideo: React.FC<SlidesData> = ({ data }) => {
//     return (
//         <div className="flex w-full flex-col justify-center md:flex-row md:gap-3">
//             <div className="card w-full bg-base-300 rounded-box grid h-auto place-items-center p-2">
//                 <div className="w-full max-w-screen-lg aspect-w-16 aspect-h-9">
//                     <ReactPlayer
//                         url="https://v.oml.ru/v/mp4/8400dd10b47feca7f2d70cf0f1e51ecb/480"
//                         controls
//                         width="100%"
//                         height="100%"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export const ContentVideoAndText: React.FC<SlidesData> = ({ data }) => {
//     return (
//         <>
//             <div className="flex w-full flex-col border-opacity-50 md:flex-row md:gap-3">
//                 <div className="card w-full md:w-1/2 bg-base-300 rounded-box grid h-auto place-items-center p-2">
//                     <div className="w-full max-w-screen-lg aspect-w-16 aspect-h-9">
//                         <ReactPlayer
//                             url="https://v.oml.ru/v/mp4/8400dd10b47feca7f2d70cf0f1e51ecb/480"
//                             controls
//                             width="100%"
//                             height="100%"
//                         />
//                     </div>
//                 </div>
//                 <div className="divider"></div>
//                 <div className="card bg-base-300 rounded-box grid h-auto place-items-center p-2 md:w-1/2">
//                     <p className="text-2xl">
//                         Давно выяснено, что при оценке дизайна и композиции
//                         читаемый текст мешает сосредоточиться. Lorem Ipsum
//                         используют потому, что тот обеспечивает более или менее
//                         стандартное заполнение шаблона, а также реальное
//                         распределение букв и пробелов в абзацах, которое не
//                         получается при простой дубликации "Здесь ваш текст..
//                         Здесь ваш текст.. Здесь ваш текст.." Многие программы
//                         электронной вёрстки и редакторы HTML используют Lorem
//                         Ipsum в качестве текста по умолчанию, так что поиск по
//                         ключевым словам "lorem ipsum" сразу показывает, как
//                         много веб-страниц всё ещё дожидаются своего настоящего
//                         рождения. За прошедшие годы текст Lorem Ipsum получил
//                         много версий. Некоторые версии появились по ошибке,
//                         некоторые - намеренно (например, юмористические
//                         варианты).
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// };

export const ContentText: React.FC<SlidesData> = ({ data }) => {
    const getHTML = () => {
        const html = marked(data[0].text);
        return { __html: html };
    };

    return (
        <>
            <div className="flex w-full flex-col border-opacity-50 md:flex-row md:gap-3">
                <div className="card bg-base-300 rounded-box grid h-auto place-items-center p-2">
                    <div
                        dangerouslySetInnerHTML={getHTML()}
                        className="text-2xl"
                    />
                </div>
            </div>
        </>
    );
};

// interface Question {
//     question: string;
//     options: string[];
//     correctAnswer: string;
// }

// const questions: Question[] = [
//     {
//         question: "Какой язык используется для веб-разработки?",
//         options: ["HTML", "Python", "Java", "C++", "Ruby"],
//         correctAnswer: "HTML",
//     },
//     {
//         question: "Что такое React?",
//         options: [
//             "Библиотека",
//             "Язык программирования",
//             "Фреймворк",
//             "Система управления базами данных",
//             "Операционная система",
//         ],
//         correctAnswer: "Библиотека",
//     },
//     {
//         question: "Что такое Redux?",
//         options: [
//             "База данных",
//             "Менеджер состояния",
//             "Сервер",
//             "Язык программирования",
//             "Фреймворк",
//         ],
//         correctAnswer: "Менеджер состояния",
//     },
// ];

// export const ContentQuiz: React.FC<SlidesData> = ({ data }) => {
//     const [checkAnswer, setCheckAnswer] = useState<boolean>(false);
//     const [selectedOption, setSelectedOption] = useState<string | null>(null);
//     const disableAllOptions = () => {
//         setCheckAnswer(true);
//     };

//     return (
//         <div className="border border-black w-full rounded-md md:w-1/3 px-3 py-3 text-lg">
//             {questions.map((q, questionIndex) => (
//                 <div key={questionIndex} className="mb-5 border-b border-black">
//                     <h1 className="mb-3">{q.question}</h1>
//                     {q.options.map((option, index) => (
//                         <div className="form-control" key={index}>
//                             <label className="label cursor-pointer disabled-label">
//                                 <span className="label-text text-lg">
//                                     {option}
//                                 </span>
//                                 <input
//                                     type="radio"
//                                     name={`radio-${questionIndex}`}
//                                     className={`radio ${checkAnswer && option === q.correctAnswer ? "checked:bg-green-500" : "checked:bg-stone-500"} ${checkAnswer && option === q.correctAnswer ? "bg-green-500" : ""}
//                                     `}
//                                     disabled={checkAnswer}
//                                     onChange={() => setSelectedOption(option)}
//                                 />
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//             <div className="flex justify-end">
//                 <button className="btn" onClick={disableAllOptions}>
//                     Проверить
//                 </button>
//             </div>
//         </div>
//     );
// };
