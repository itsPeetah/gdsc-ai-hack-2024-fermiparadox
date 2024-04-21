import { Message } from "@/lib/openai/chatMessage";
import React from "react";

export type ChatMessageProps = Message;

export default function ChatMessage(props: ChatMessageProps) {
  if (props.role === "system") return <></>;

  if (props.role === "assistant")
    return (
      <div className="relative h-max p-2 max-w-[600px] text-left">
        <div className="absolute top-0 -left-2 w-[3px] h-full flex-shrink-0 bg-gradient-to-b from-massi-start via-massi-mid to-massi-end" />
        <div className="text-sm">{props.content}</div>
      </div>
    );

  return (
    <div className="flex flex-row p-2 max-w-[600px] mr-0 ml-auto text-right border-r-[3px] border-r-black border-opacity-50">
      <div className="text-sm">{props.content}</div>
    </div>
  );
}
