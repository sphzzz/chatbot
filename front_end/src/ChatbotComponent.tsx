import {RequestDetails} from 'deep-chat/dist/types/interceptors';
import {DeepChat} from 'deep-chat-react';

const messageStyles = { default: { shared: { innerContainer: { fontSize: '1rem' } } } };
const inputAreaStyle = { fontSize: '1rem' };

const history = [
  // { text: "Hey, how are you?", role: "user" },
  // { text: "I am doing great, thanks.", role: "ai" },
  // { text: "What is the meaning of life?", role: "user" },
  // { text: "Seeking fulfillment and personal growth.", role: "ai" }
];

const directConnection = {
  "openAI": {
    "key": "sk-s4RYKmFXCrXJpNogc9LC8nHvWtO2tHBIeTl9OilSpBcVZgvH",
    "chat": {
      "max_tokens": 20,
      "system_prompt": "Assist me with anything you can"
    },
    "assistant": true
  },
  "url": "http://localhost:8080/openai-chat",
};

const webModel = "true";



const ChatbotComponent = () => {
// demo/style/textInput are examples of passing an object directly into a property
// history is an example of passing a state object into a property
return (
  <div className="App">
    <h1>Peihao's Chatbot</h1>
    <DeepChat
    style={{ borderRadius: '10px', width: '90vw', height: 'calc(70vh - 70px)', paddingTop: '10px' }}
    messageStyles={messageStyles}
    inputAreaStyle={inputAreaStyle}
    history={history}
    stream="true"
    connect={directConnection}
    />
  </div>
);
};

export default ChatbotComponent;
