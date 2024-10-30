import { useEffect, useState } from "react";
import { fetchRandomNotes } from "../utils/noteUtils";

export default function LessonContent() {
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
    const [currQuestionIdx, setCurrQuestionIdx] = useState(0);
    const [incorrectCnts, setIncorrectCnts] = useState<number[]>(Array(10).fill(0));
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        // 1問目の時のみ、正解の配列をフェッチ
        if (currQuestionIdx === 0) {
            setCorrectAnswers(fetchRandomNotes());
        }
    }, []);


    // 現在の正解
    const currCorrectAnswer = correctAnswers[currQuestionIdx];

    return (
        <div>
            
        </div>
    );
}