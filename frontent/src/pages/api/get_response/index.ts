// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Message, MessageRole } from "@/lib/openai/chatMessage";
import { getCompletion } from "@/lib/openai/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: Message;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(req.body) as { messages: Message[] };
  console.log(">>> USER: " + data.messages.at(-1)?.content);
  const response = await getCompletion(data.messages);
  const { role, content } = response.choices[0].message;
  console.log(">>> ASSISTANT: " + content);
  res.status(200).json({
    message: { role, content: content as string },
  });
}
