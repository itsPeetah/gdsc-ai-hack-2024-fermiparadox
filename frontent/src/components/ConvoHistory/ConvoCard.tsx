import Image from "next/image";
import React from "react";

export interface ConvoCardProps {
  title: string;
  cover: string;
}

export default function ConvoCard(props: ConvoCardProps) {
  return (
    <div
      className="w-[250px] h-[200px] shadow-lg hover:scale-105 transition-all duration-150"
      onClick={() => {
        alert(
          "[FEATURE ABSENT IN THE DEMO] These are your previous conversations with your AI Financial Advisor"
        );
      }}
    >
      <div className="relative w-full h-[160px]">
        <Image
          src={props.cover}
          alt=""
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="w-full h-[40px] bg-white rounded-b-lg p-1">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
