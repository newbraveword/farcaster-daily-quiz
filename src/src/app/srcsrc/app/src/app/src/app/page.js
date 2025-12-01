"use client";

import { useState } from "react";

export default function Home() {
  const [hasAnswered, setHasAnswered] = useState(false);

  const question = {
    text: "Bitcoin'in maksimum arzı kaç BTC'dir?",
    options: ["10 milyon", "21 milyon", "50 milyon", "Sınır yok"],
    answer: 1
  };

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center"
    }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Daily Blockchain Quiz
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "20px" }}>
        {question.text}
      </p>

      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => setHasAnswered(true)}
          style={{
            padding: "12px 20px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
            background: "#222",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            width: "80%",
            maxWidth: "350px"
          }}
        >
          {opt}
        </button>
      ))}

      {hasAnswered && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "#0f0" }}>
          Cevabın kaydedildi ✔️
        </p>
      )}

    </main>
  );
}
