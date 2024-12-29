import { useState } from "react";
import createChatCompletion from "./config"; // Import the Groq SDK configuration

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
      <div
        className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white text-xl cursor-pointer transition-all duration-300 transform ${isOpen ? "rotate-45" : ""}`}
        onClick={toggleChatbot}
      >
        {isOpen ? "✖" : "🤖"}
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[450px] h-[550px] bg-white shadow-lg rounded-lg border border-blue-300 flex flex-col">
          <div className="p-4 bg-blue-600 text-white text-xl rounded-t-lg flex justify-between items-center">
            <span>Chatbot</span>
            <button
              onClick={toggleChatbot}
              className="text-xl text-white hover:bg-blue-500 rounded-full p-2"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-blue-600 text-center mt-4">Thinking...</div>
            )}
          </div>

          <div className="p-4 bg-gray-100 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message here..."
              className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="ml-2 px-6 py-3 rounded-r-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
