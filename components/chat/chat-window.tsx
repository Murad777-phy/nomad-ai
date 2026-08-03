"use client";

import { useState } from "react";

import Container from "@/components/shared/container";
import Message from "./message";
import QuestionCard from "./question-card";

import { questions } from "@/data/questions";
import { Answer, ChatMessage } from "@/types/chat";

export default function ChatWindow() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "user",
      text: "I want somewhere warm in November.",
    },
    {
      role: "assistant",
      text: questions[0].question,
    },
  ]);

  const [answers, setAnswers] = useState<Answer[]>([]);

  function handleAnswer(answer: string) {
    const current = questions[currentQuestion];

    // Store the answer
    setAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        answer,
      },
    ]);

    // Build the conversation
    const updatedMessages: ChatMessage[] = [
      ...messages,
      {
        role: "user",
        text: answer,
      },
    ];

    const nextIndex = currentQuestion + 1;

    if (nextIndex < questions.length) {
      updatedMessages.push({
        role: "assistant",
        text: questions[nextIndex].question,
      });
    }

    setMessages(updatedMessages);
    setCurrentQuestion(nextIndex);
  }

  return (
    <Container className="max-w-3xl">
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-8 py-6">
          <h1 className="text-3xl font-bold">
            Planning your perfect trip
          </h1>

          <p className="mt-2 text-slate-500">
            We'll ask a few quick questions before recommending destinations.
          </p>
        </div>

        <div className="space-y-6 p-8">
          {messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              text={message.text}
            />
          ))}

          {currentQuestion < questions.length && (
            <QuestionCard
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onSelect={handleAnswer}
            />
          )}
        </div>
      </div>

      {/* Temporary Debug Panel */}
      <pre className="mt-8 overflow-auto rounded-xl bg-slate-900 p-6 text-sm text-green-400">
        {JSON.stringify(answers, null, 2)}
      </pre>
    </Container>
  );
}