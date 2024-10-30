'use client'

import { playNote } from "./utils/noteUtils";

export default function Home() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pitch = e.currentTarget.innerText;

    playNote(pitch)
  };

  return (
    <div>
      <h1>Hello World</h1>
      <button
        className="m-5 p-3 bg-green-500 rounded-lg "
        onClick={(e) => handleClick(e)}
      >A</button>
    </div>
  );
}
