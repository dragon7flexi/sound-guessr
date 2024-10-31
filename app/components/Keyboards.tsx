import KeyboardButton from "./KeyboardButton";

interface KeyBoardsProps {
    setUserAnswer: (userAnswer: string) => void;
}

export default function KeyBoards({ setUserAnswer }: KeyBoardsProps) {
    return (
        <div className="flex flex-col items-center relative scale-250">
            {/* 白鍵 */}
            <div className="flex">
                <KeyboardButton isWhiteKey={true} pitch="C" setUserAnswer={setUserAnswer} />
                <KeyboardButton isWhiteKey={true} pitch="D" setUserAnswer={setUserAnswer} />
                <KeyboardButton isWhiteKey={true} pitch="E" setUserAnswer={setUserAnswer} />
                <KeyboardButton isWhiteKey={true} pitch="F" setUserAnswer={setUserAnswer} />
                <KeyboardButton isWhiteKey={true} pitch="G" setUserAnswer={setUserAnswer} />
                <KeyboardButton isWhiteKey={true} pitch="A" setUserAnswer={setUserAnswer} />
                <KeyboardButton isWhiteKey={true} pitch="B" setUserAnswer={setUserAnswer} />
            </div>

            {/* 黒鍵 */}
            <div className="absolute top-[-50%] left-0 flex">
                <div className="relative ml-7">
                    <KeyboardButton isWhiteKey={false} pitch="C#" setUserAnswer={setUserAnswer} /> {/* C# */}
                </div>
                <div className="relative ml-3">
                    <KeyboardButton isWhiteKey={false} pitch="D#" setUserAnswer={setUserAnswer} /> {/* D# */}
                </div>
                <div className="relative ml-12">
                    <KeyboardButton isWhiteKey={false} pitch="F#" setUserAnswer={setUserAnswer} /> {/* F# */}
                </div>
                <div className="relative ml-3">
                    <KeyboardButton isWhiteKey={false} pitch="G#" setUserAnswer={setUserAnswer} /> {/* G# */}
                </div>
                <div className="relative ml-3">
                    <KeyboardButton isWhiteKey={false} pitch="A#" setUserAnswer={setUserAnswer} /> {/* A# */}
                </div>
            </div>
        </div>
    );
}
