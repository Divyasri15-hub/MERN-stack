import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you?" },
  ]);
  const [input, setInput] = useState("");

  const responses = {
    hello: "Hi there! How can I help you?",
    "book appointment": "Sure! What date and time do you prefer?",
    "doctor details":
      "We have specialists in Cardiology, Neurology, and Pediatrics.",
    prescription: "Please provide your patient ID for retrieving prescription.",
    bye: "Goodbye! Have a great day!",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botReply =
      responses[input.toLowerCase()] ||
      "Sorry, I didn’t understand. Can you rephrase?";
    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const showSuggestions = () => {
    return Object.keys(responses)
      .filter((key) => key.startsWith(input.toLowerCase()) && input.length > 0)
      .map((key, i) => (
        <div
          key={i}
          style={suggestionStyle}
          onClick={() => {
            setInput(key);
          }}
        >
          {key}
        </div>
      ));
  };

  return (
    <div style={chatPageStyle}>
      <h1 style={titleStyle}>AI Chatbot</h1>

      <div style={chatboxStyle}>
        {messages.map((m, i) => (
          <p
            key={i}
            style={m.sender === "bot" ? botMsgStyle : userMsgStyle}
          >
            <b>{m.sender === "bot" ? "Bot:" : "You:"}</b> {m.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
        style={inputStyle}
      />

      <div style={suggestionsWrapper}>{showSuggestions()}</div>
    </div>
  );
}

/* ---------- INLINE STYLE OBJECTS ---------- */
const chatPageStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  backgroundImage:
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRza04mu4Shhf-AVZHFb_I7R_7PN6Z4-QZNkA&s')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "20px",
};

const titleStyle = {
  color: "#007bff",
  textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
};

const chatboxStyle = {
  width: "600px",
  height: "500px",
  border: "3px solid #00b4d8",
  borderRadius: "15px",
  padding: "15px",
  overflowY: "auto",
  margin: "20px auto",
  background: "rgba(204, 229, 255, 0.8)",
  backdropFilter: "blur(5px)",
  color: "#003366",
  boxShadow: "0 0 20px rgba(0, 180, 216, 0.6)",
};

const botMsgStyle = {
  textAlign: "left",
  color: "#003366",
  margin: "8px 0",
};

const userMsgStyle = {
  textAlign: "right",
  color: "#0056b3",
  margin: "8px 0",
};

const inputStyle = {
  width: "80%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #007bff",
  outline: "none",
  fontSize: "16px",
  boxShadow: "0 0 8px rgba(0, 123, 255, 0.4)",
};

const suggestionsWrapper = {
  marginTop: "10px",
};

const suggestionStyle = {
  background: "#eee",
  padding: "8px",
  margin: "4px",
  cursor: "pointer",
  borderRadius: "5px",
  display: "inline-block",
  transition: "background 0.3s ease, transform 0.2s",
};
