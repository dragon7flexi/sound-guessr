'use client'

import LinkButton from "./components/LinkButton";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-7xl">Hello World</h1>
      <LinkButton href="/lesson">
        Start
      </LinkButton>
    </div>
  );
}
