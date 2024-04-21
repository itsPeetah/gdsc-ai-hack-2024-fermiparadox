import { Message } from "./chatMessage";

export async function fetchAssistantResponse(
  messages: Message[]
): Promise<Message> {
  const res = await fetch("/api/get_response", {
    method: "POST",
    body: JSON.stringify({ messages }),
  });
  const json = await res.json();
  const { message } = json as {
    message: Message;
  };
  return message;
}
