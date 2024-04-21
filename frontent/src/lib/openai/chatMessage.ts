export type MessageRole = "user" | "assistant" | "system";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};
