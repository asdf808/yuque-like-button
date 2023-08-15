import { useState } from "react";

export function App() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div
        className={`like-button ${isLiked ? "liked" : ""}`}
        onClick={() => setIsLiked(!isLiked)}
      />
      <span>点赞</span>
    </div>
  );
}
