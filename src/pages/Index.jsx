import { useState } from "react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-green-500 text-white">
        <h1 className="text-xl font-bold">Chat App</h1>
        <FaUserCircle size={30} />
      </header>

      {/* Chat Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"} mb-2`}>
            <div className={`p-2 rounded-lg ${message.sender === "You" ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}>{message.text}</div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex items-center p-4 bg-white border-t border-gray-300">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button className="ml-2 p-2 bg-green-500 text-white rounded-lg" onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Index;
