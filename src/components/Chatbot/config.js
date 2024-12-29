import { Groq } from "groq-sdk"; // Correct import syntax for ES6

const groq = new Groq({
    apiKey: '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',
    dangerouslyAllowBrowser: true
});

// Define the content template
const generateTemplate = (userMessage) => {
  return `You are a helpful assistant. Based on the user's message, provide concise and accurate responses.\n\nUser: ${userMessage}\nAssistant: `;
};

const createChatCompletion = async (messages) => {
  try {
    const formattedMessages = messages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.sender === "user" ? generateTemplate(msg.text) : msg.text,
    }));

    const chatCompletion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.2-90b-vision-preview",
      temperature: 1,
      max_tokens: 8192,
      top_p: 1,
      stream: false,
      stop: null,
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error creating chat completion:", error);
    return "Sorry, I couldn't process your request.";
  }
};

export default createChatCompletion;
