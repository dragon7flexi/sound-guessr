"use client"

import { useEffect, useState } from "react";
import { fetchRandomNotes, playNote } from "../utils/noteUtils";
import KeyBoards from "../components/Keyboards";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/navigation";

export default function LessonContent() {
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
    const [currQuestionIdx, setCurrQuestionIdx] = useState<number>(0);
    const [userAnswer, setUserAnswer] = useState<string>("")
    const [incorrectCnts, setIncorrectCnts] = useState<number[]>(Array(10).fill(0));
    const router = useRouter();

    const currCorrectAnswer = correctAnswers[currQuestionIdx];

    useEffect(() => {
        const notes = fetchRandomNotes();
        setCorrectAnswers(notes);

        playNote(currCorrectAnswer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            playNote(currCorrectAnswer); // 問題が変わったときに音を鳴らす
        }, 1000); // 1000ms待機

        return () => clearTimeout(timer); // クリーンアップ
    }, [currQuestionIdx]);

    useEffect(() => {
        if (userAnswer) {
            handleUserAnswer();
        }
    }, [userAnswer]);


    const handleUserAnswer = () => {
        if (userAnswer === currCorrectAnswer) {
            // 正解の場合
            if (currQuestionIdx < correctAnswers.length - 1) {
                // まだ問題が残っていたら次の問題へ
                setCurrQuestionIdx((prevIdx) => prevIdx + 1);
                setUserAnswer("");
            } else {
                // 最後の問題なら終了してリザルトページへ
                // incorrectCntsをJSON.stringifyでエンコードしてURLに埋め込む
                router.push(`/result?incorrectCnts=${encodeURIComponent(JSON.stringify(incorrectCnts))}`);
            }
        } else {
            setIncorrectCnts((prevIncorrectCnts) => 
                prevIncorrectCnts.map((cnt, idx) =>
                    idx === currQuestionIdx ? cnt + 1 : cnt
                )
            );
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <LinkButton href="/">戻る</LinkButton>
            <h1 className="mt-20 text-4xl">{currQuestionIdx + 1}問目</h1>

            <button
                className="mt-10 t-10 px-4 py-2 text-4xl shadow-2xl bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg"
                onClick={() => playNote(currCorrectAnswer)}
            >音を鳴らす</button>

            <div className="flex h-screen justify-center items-center">
                <KeyBoards setUserAnswer={setUserAnswer}/>
            </div>
        </div>
    );
}