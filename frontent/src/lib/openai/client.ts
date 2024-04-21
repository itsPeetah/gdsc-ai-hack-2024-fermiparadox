import OpenAI from "openai";
import getSystemPrompt from "./getSystemPrompt";
import { Message } from "./chatMessage";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getCompletion(messages: Message[]) {
  const chatCompletion = await openai.chat.completions.create({
    messages: [getSystemPrompt(), ...messages],
    model: "gpt-3.5-turbo",
  });
  return chatCompletion;
}

export default openai;
