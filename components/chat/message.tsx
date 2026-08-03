interface MessageProps {
  role: "user" | "assistant";
  text: string;
}

export default function Message({ role, text }: MessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-lg rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-emerald-600 text-white"
            : "bg-slate-100 text-slate-900"
        }`}
      >
        {text}
      </div>
    </div>
  );
}