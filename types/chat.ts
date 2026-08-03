export interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export interface Answer {
  question: string;
  answer: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
}