document.addEventListener("DOMContentLoaded", () => {
    const chatbotMessages = document.querySelector("#chatbot-messages");
    const chatbotInput = document.querySelector("#chatbot-input");
    const chatbotSend = document.querySelector("#chatbot-send");
    const chatbotClose = document.querySelector("#chatbot-close");
    const chatbot = document.querySelector("#chatbot");

    const receptionNumber = "0786283248";

    const responses = {
        greeting: "Hi! I'm Mandy. How can I assist you today? Would you like help with our Baked Products or Catering Services?",
        baked: `Great choice! Our baked products include cakes, pastries, and more. Please call us at ${receptionNumber} for more details.`,
        catering: `Wonderful! Our catering services cover events like weddings and parties. Call us at ${receptionNumber} to plan your event.`,
        unknown: "I'm not sure about that. Please choose between Baked Products or Catering Services."
    };

    function sendMessage(message, fromUser = true) {
        const msgDiv = document.createElement("div");
        msgDiv.textContent = message;
        msgDiv.style.textAlign = fromUser ? "right" : "left";
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleUserInput() {
        const userMessage = chatbotInput.value.trim().toLowerCase();
        chatbotInput.value = "";

        if (!userMessage) return;

        sendMessage(userMessage);

        if (userMessage.includes("baked")) {
            sendMessage(responses.baked, false);
        } else if (userMessage.includes("catering")) {
            sendMessage(responses.catering, false);
        } else if (userMessage.includes("hello") || userMessage.includes("hi")) {
            sendMessage(responses.greeting, false);
        } else {
            sendMessage(responses.unknown, false);
        }
    }

    chatbotSend.addEventListener("click", handleUserInput);

    chatbotInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });

    chatbotClose.addEventListener("click", () => {
        chatbot.style.display = "none";
    });

    // Initial welcome message
    sendMessage(responses.greeting, false);
});
