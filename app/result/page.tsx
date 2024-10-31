"use client";

import { useSearchParams } from "next/navigation";
import LinkButton from "../components/LinkButton";

export default function ResultContent() {
    const searchParams = useSearchParams();
    const incorrectCnts = searchParams.get("incorrectCnts");

    // incorrectCntsをJSON.parseで配列に変換
    const incorrectCountsArray: number[] = incorrectCnts ? JSON.parse(incorrectCnts) : [];

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-7xl">間違えた回数</h1>
            <ul>
                {incorrectCountsArray.map((cnt: number, idx: number) => (
                    <li key={idx} className="text-3xl py-3">{idx + 1}問目: {cnt}</li>
                ))}
            </ul>

            <LinkButton href="/">トップページへ戻る</LinkButton>
            <LinkButton href="/lesson">もう一度</LinkButton>
        </div>
    );
}
