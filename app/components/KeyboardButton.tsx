import { playNote } from "../utils/noteUtils";

interface KeyboardButtonProps {
    isWhiteKey: boolean;
    pitch: string;
    setUserAnswer: (userAnswer: string) => void;
}

export default function KeyboardButton({ isWhiteKey, pitch, setUserAnswer }: KeyboardButtonProps) {
    const ButtonStyle: string = isWhiteKey 
        ? "w-12 h-32 flex items-end justify-center bg-white text-gray-600 border-4" 
        : "w-10 h-32 flex items-end justify-center bg-black text-gray-500 border-4 border-gray-900";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const pitch = e.currentTarget.innerText;
        playNote(pitch);
        setUserAnswer(pitch)
    };

    return (
        <button
            className={ButtonStyle}
            onClick={(e) => handleClick(e)}
        >
            <span className="mb-1">{pitch}</span>
        </button>
    );
}
