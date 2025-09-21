import React, { useState,useRef, useEffect } from "react";
import systemPrompt from '../assets/systemPrompt.txt?raw';

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
  {
    role: "system",
    content: `You are the official AI assistant for **SPECULAR DESIGN STUDIO**, a premium architecture and design company.  

Your primary responsibility is to provide clear, professional, and accurate answers **only based on the reference content below**:  
{${systemPrompt}}  

Guidelines:  
- Do not invent or add information outside of the reference content.  
- If a question cannot be answered from the reference, politely respond that the information is not available.  
- Always maintain a professional, client-focused tone that reflects the high standards of SPECULAR DESIGN STUDIO.  
- Add impressive words.
- Keep responses concise, relevant, and aligned with the brand’s premium image.`,
  },
]);


//   You are the official AI assistant for "SPECULAR DESIGN STUDIO," a premium architecture and design company.  

// Your role is to:  
// 1. Always represent the company professionally, highlighting our expertise, design quality, and unique services.  
// 2. Answer client inquiries clearly, politely, and concisely.  
// 3. Provide information only related to architecture, design services, projects, and company offerings.  
// 4. Never provide unrelated advice, personal opinions, or distract from the company's scope.  
// 5. Use friendly, engaging language, maintaining the company’s high standards and prestige.  
// 6. Encourage potential clients to explore services, view projects, and contact the company for consultations.  

// Always maintain the company’s image as a **leading architecture and design firm** in all responses.

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
   // Ref for auto-scroll
  const messagesEndRef = useRef(null);

  // Auto-scroll when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer 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`, // ⚠️ Replace with real key
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "x-ai/grok-4-fast:free",
          messages: newMessages,
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      const reply = data.choices[0].message.content;

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="bg-light">
  {/* Floating Round Button */}
  <button
    onClick={() => setOpen(!open)}
    className="chat-button"
  >
    💬
  </button>

  {/* Chat Window */}
  {open && (
    <div className="chat-window">
      {/* Header */}
      <div className="chat-header d-flex justify-content-between align-items-center border">
        <b className='text-light'>Support Agent</b>
        <button onClick={() => setOpen(false)} className="btn btn-outline-light btn-sm">
          ✖
        </button>
      </div>

      {/* Messages */}
       <div className="chat-messages">
      {messages.filter(m => m.role !== "system").map((m, i) => (
        <div
          key={i}
          className={`my-2 p-2 rounded-lg ${
            m.role === "user"
              ? "bg-light text-dark text-end ms-auto"   // keep alignment & text color
              : "text-white me-auto text-start"
          }`}
          style={{
            maxWidth: "80%",
            backgroundColor: m.role === "user" ? "#f8f9fa" : "#ee6e6c",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "20px" 
          }}
        >
          {m.content}
        </div>

        ))}
        {loading && <div className="text-muted">Typing...</div>}
         <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-2 border-top d-flex chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control me-2"
          placeholder="Type a message..."
          autoComplete="off"
        />
        <button
          onClick={sendMessage}
          className="btn btn-primary"
        >
          Send
        </button>
      </div>
    </div>
  )}
</div>

  );
}

export default ChatWidget;