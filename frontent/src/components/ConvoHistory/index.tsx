import React from "react";
import ConvoCard, { ConvoCardProps } from "./ConvoCard";

const previouseConversations: ConvoCardProps[] = [
  {
    title: "My Car Payment",
    cover: "/convos/car.jpg",
  },
  {
    title: "Renting vs Buying",
    cover: "/convos/house.jpg",
  },
  {
    title: "My Savings Account",
    cover: "/convos/graph.jpg",
  },
  // {
  //   title: "Stock Investing Advice",
  //   cover: "/convos/stock.jpg",
  // },
];

export default function ConvoHistory() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none">
      <div className="h-full overflow-hidden">
        <div className="relative w-max | flex flex-col gap-4 p-4 | overflow-auto -translate-x-[250px] hover:translate-x-0 pointer-events-auto transition-all duration-300 ease-in-out">
          <h1 className="text-xl font-light">Advice History:</h1>
          {previouseConversations.map((conv) => {
            return <ConvoCard {...conv} key={`convocard_${conv.title}`} />;
          })}
        </div>
      </div>
    </div>
  );
}
