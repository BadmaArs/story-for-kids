import { useState } from "react";
import ReactPlayer from "react-player";

export const ContentImage = () => {
    return (
        <div className="flex w-full flex-col border-opacity-50">
            <div className="card bg-base-300 rounded-box grid h-auto place-items-center">
                <img
                    alt="Tailwind CSS examples"
                    src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1728028582~exp=1728032182~hmac=5dfd30c964a3dda2deffc8c242514899bc9739f70ffa83c684d8a6870f58591d&w=2000"
                />
            </div>
        </div>
    );
};

export const ContentTextAndImage = () => {
    return (
        <>
            <div className="flex w-full flex-col border-opacity-50 md:flex-row md:gap-3">
                <div className="card bg-base-300 rounded-box grid h-auto place-items-center md:w-1/2">
                    <img
                        alt="Tailwind CSS examples"
                        src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1728028582~exp=1728032182~hmac=5dfd30c964a3dda2deffc8c242514899bc9739f70ffa83c684d8a6870f58591d&w=2000"
                    />
                </div>
                <div className="divider"></div>
                <div className="card bg-base-300 rounded-box grid h-auto place-items-center p-2 md:w-1/2">
                    <p className="text-lg">
                        Давно выяснено, что при оценке дизайна и композиции
                        читаемый текст мешает сосредоточиться. Lorem Ipsum
                        используют потому, что тот обеспечивает более или менее
                        стандартное заполнение шаблона, а также реальное
                        распределение букв и пробелов в абзацах, которое не
                        получается при простой дубликации "Здесь ваш текст..
                        Здесь ваш текст.. Здесь ваш текст.." Многие программы
                        электронной вёрстки и редакторы HTML используют Lorem
                        Ipsum в качестве текста по умолчанию, так что поиск по
                        ключевым словам "lorem ipsum" сразу показывает, как
                        много веб-страниц всё ещё дожидаются своего настоящего
                        рождения. За прошедшие годы текст Lorem Ipsum получил
                        много версий. Некоторые версии появились по ошибке,
                        некоторые - намеренно (например, юмористические
                        варианты).
                    </p>
                </div>
            </div>
        </>
    );
};

export const ContentVideo = () => {
    return (
        <div className="flex w-full flex-col justify-center md:flex-row md:gap-3">
            <div className="card w-full bg-base-300 rounded-box grid h-auto place-items-center p-2">
                <div className="w-full max-w-screen-lg aspect-w-16 aspect-h-9">
                    <ReactPlayer
                        url="https://v.oml.ru/v/mp4/8400dd10b47feca7f2d70cf0f1e51ecb/480"
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export const ContentVideoAndText = () => {
    return (
        <>
            <div className="flex w-full flex-col border-opacity-50 md:flex-row md:gap-3">
                <div className="card w-full md:w-1/2 bg-base-300 rounded-box grid h-auto place-items-center p-2">
                    <div className="w-full max-w-screen-lg aspect-w-16 aspect-h-9">
                        <ReactPlayer
                            url="https://v.oml.ru/v/mp4/8400dd10b47feca7f2d70cf0f1e51ecb/480"
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="card bg-base-300 rounded-box grid h-auto place-items-center p-2 md:w-1/2">
                    <p className="text-lg">
                        Давно выяснено, что при оценке дизайна и композиции
                        читаемый текст мешает сосредоточиться. Lorem Ipsum
                        используют потому, что тот обеспечивает более или менее
                        стандартное заполнение шаблона, а также реальное
                        распределение букв и пробелов в абзацах, которое не
                        получается при простой дубликации "Здесь ваш текст..
                        Здесь ваш текст.. Здесь ваш текст.." Многие программы
                        электронной вёрстки и редакторы HTML используют Lorem
                        Ipsum в качестве текста по умолчанию, так что поиск по
                        ключевым словам "lorem ipsum" сразу показывает, как
                        много веб-страниц всё ещё дожидаются своего настоящего
                        рождения. За прошедшие годы текст Lorem Ipsum получил
                        много версий. Некоторые версии появились по ошибке,
                        некоторые - намеренно (например, юмористические
                        варианты).
                    </p>
                </div>
            </div>
        </>
    );
};

export const ContentText = () => {
    return (
        <div className="flex w-full flex-col border-opacity-50 md:flex-row md:gap-3">
            <div className="card bg-base-300 rounded-box grid h-auto place-items-center p-2">
                <p className="text-lg">
                    Давно выяснено, что при оценке дизайна и композиции читаемый
                    текст мешает сосредоточиться. Lorem Ipsum используют потому,
                    что тот обеспечивает более или менее стандартное заполнение
                    шаблона, а также реальное распределение букв и пробелов в
                    абзацах, которое не получается при простой дубликации "Здесь
                    ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие
                    программы электронной вёрстки и редакторы HTML используют
                    Lorem Ipsum в качестве текста по умолчанию, так что поиск по
                    ключевым словам "lorem ipsum" сразу показывает, как много
                    веб-страниц всё ещё дожидаются своего настоящего рождения.
                    За прошедшие годы текст Lorem Ipsum получил много версий.
                    Некоторые версии появились по ошибке, некоторые - намеренно
                    (например, юмористические варианты).
                </p>
            </div>
        </div>
    );
};

interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

const questions: Question[] = [
    {
        question: "Какой язык используется для веб-разработки?",
        options: ["HTML", "Python", "Java", "C++", "Ruby"],
        correctAnswer: "HTML",
    },
    {
        question: "Что такое React?",
        options: [
            "Библиотека",
            "Язык программирования",
            "Фреймворк",
            "Система управления базами данных",
            "Операционная система",
        ],
        correctAnswer: "Библиотека",
    },
    {
        question: "Что такое Redux?",
        options: [
            "База данных",
            "Менеджер состояния",
            "Сервер",
            "Язык программирования",
            "Фреймворк",
        ],
        correctAnswer: "Менеджер состояния",
    },
];

export const ContentQuiz = () => {
    const [checkAnswer, setCheckAnswer] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const disableAllOptions = () => {
        setCheckAnswer(true);
        console.log(checkAnswer);
    };

    return (
        <div className="border border-black w-full rounded-md md:w-1/3 px-3 py-3 text-lg">
            {questions.map((q, questionIndex) => (
                <div key={questionIndex} className="mb-5 border-b border-black">
                    <h1 className="mb-3">{q.question}</h1>
                    {q.options.map((option, index) => (
                        <div className="form-control" key={index}>
                            <label className="label cursor-pointer">
                                <span className="label-text text-lg">
                                    {option}
                                </span>
                                <input
                                    type="radio"
                                    name={`radio-${questionIndex}`}
                                    className={`radio checked:bg-brown-100 ${checkAnswer && option === q.correctAnswer ? "bg-green-500" : ""}`}
                                    disabled={checkAnswer}
                                    onChange={() => setSelectedOption(option)}
                                />
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <div className="flex justify-end">
                <button className="btn" onClick={disableAllOptions}>
                    Проверить
                </button>
            </div>
        </div>
    );
};

// https://videocdn.cdnpk.net/videos/fd7e918a-0d3b-4c38-ad02-f07d8435f8ad/horizontal/previews/clear/large.mp4?token=exp=1728034634~hmac=da6d2db521d70abf34beae6d28fac39e558162a6b9858c5ac9019416d59c7315
