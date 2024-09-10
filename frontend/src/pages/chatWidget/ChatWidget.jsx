import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white shadow-lg w-80 h-96 rounded-lg flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span>Chat with us</span>
            <div className="space-x-2">
              <button
                className="bg-white text-blue-500 px-2 py-1 rounded"
                onClick={toggleChat}
              >
                {isOpen ? '-' : '+'}
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={closeChat}
              >
                X
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages would go here */}
            <p>Welcome to our chat! How can we assist you today?</p>
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
          onClick={toggleChat}
        >
          Chat with us
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
