import { Message } from "@/lib/openai/chatMessage";
import { fetchAssistantResponse } from "@/lib/openai/fetchAssistantResponse";
import { useReducer, useRef, useState } from "react";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
import Image from "next/image";

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const hasMessages = messages.length > 0;

  const handlePickSuggestion = (text: string) => {
    sendMessage(text);
  };

  async function handleSubmitMessage() {
    sendMessage(userInput);
    setUserInput(() => "");
  }

  async function sendMessage(text: string) {
    const userMessage: Message = {
      role: "user",
      content: text,
    };
    const conversationSoFar = [...messages, userMessage];
    setMessages((prev) => [...prev, userMessage]);
    const responseMessage = await fetchAssistantResponse(conversationSoFar);
    setMessages((prev) => [...conversationSoFar, responseMessage]);
  }

  return (
    <div className="absolute top-0 left-0 w-screen h-screen max-h-screen | flex flex-col | bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
      <div
        id="input"
        className="flex-shrink-0 text-center p-4 font-light text-2xl"
      >
        <Image
          className="inline"
          src="/logo.png"
          alt=""
          width={80}
          height={80}
        />
      </div>
      <div id="texts" className="flex-grow overflow-hidden">
        <div className="w-full max-w-[800px] h-full mx-auto bg-opacity-45 overflow-auto">
          {hasMessages ? (
            <div className="flex flex-col gap-4 p-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.content} {...msg} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col  h-full w-full gap-4 p-4 justify-center items-center">
              <h1 className="text-orange-500">Other users are asking:</h1>
              <button
                onClick={() =>
                  handlePickSuggestion(
                    "What is the difference between leasing and renting?"
                  )
                }
                className="border border-zinc-600 px-3 py-1 rounded-lg bg-white bg-opacity-10 text-zinc-600 text-opacity-70 shadow-lg hover:scale-105 transition-all duration-200"
              >
                What is the difference between leasing and renting?
              </button>
              <button
                onClick={() =>
                  handlePickSuggestion(
                    "I need advice setting up my savings account."
                  )
                }
                className="border border-zinc-600 px-3 py-1 rounded-lg bg-white bg-opacity-10 text-zinc-600 text-opacity-70 shadow-lg hover:scale-105 transition-all duration-200"
              >
                I need advice setting up my savings account.
              </button>
            </div>
          )}
        </div>
      </div>
      <div id="input" className="flex-shrink-0">
        <div className="w-full max-w-[800px]  mx-auto  | flex flex-row p-6 gap-5 | border-t border-t-zinc-200">
          <button
            onClick={() => {
              alert(
                "[FEATURE ABSENT IN THE DEMO] You Will be able to upload financial documents and contracts. The AI Advisor will be happy to have a look and highlight all of the most important features"
              );
            }}
            className="w-10 h-10 | flex-shrink-0 | p-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </button>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmitMessage();
            }}
            className="w-full py-2 px-4 | rounded-full"
            placeholder="How can I finance my car payment?..."
          ></input>
          <button
            onClick={() => handleSubmitMessage()}
            className="w-10 h-10 | flex-shrink-0 |  p-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
