import { useState } from "react";
import createChatCompletion from "./config"; // Import the Groq SDK configuration
import "./Chatbot.css"; // Import the CSS for styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track if the chatbot is open

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput(""); // Clear input
    setIsLoading(true);

    try {
      const assistantResponse = await createChatCompletion([
        ...messages,
        userMessage,
      ]);

      const assistantMessage = { sender: "assistant", text: assistantResponse };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (e) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "assistant", text: "Something went wrong. Please try again." },
        console.log(e),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Circular button to toggle chatbot */}
      <div className={`chatbot-toggle ${isOpen ? "open" : ""}`} onClick={toggleChatbot}>
        {isOpen ? "X" : "💬"}
      </div>

      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-header">Chatbot</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  msg.sender === "user" ? "user-message" : "assistant-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="loading">Thinking...</div>}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress} // Handle Enter key press
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage} disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
