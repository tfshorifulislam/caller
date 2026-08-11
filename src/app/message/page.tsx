'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Video, 
  Send, 
  Image as ImageIcon, 
  Paperclip, 
  MoreVertical, 
  Search,
  Menu,
  ChevronLeft
} from 'lucide-react';

const MessagePage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'them', text: 'Hey, are you free for a quick video call?', time: '10:42 AM' },
    { id: 2, sender: 'me', text: 'Sure! Give me 5 minutes.', time: '10:43 AM' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'me', text: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
    setInputText('');
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar - Contacts / Recent Chats */}
      <aside 
        className={`w-full md:w-80 border-r border-gray-800 bg-gray-950 flex flex-col shrink-0 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Messages</h1>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <span className="text-xs text-gray-400">Online</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-lg bg-gray-800 py-2 pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto px-2 space-y-1">
          <div 
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-800 cursor-pointer transition-all hover:bg-gray-750"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                JD
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-gray-950"></span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h2 className="text-sm font-semibold truncate">Jane Doe</h2>
                <span className="text-xs text-gray-400">10:43 AM</span>
              </div>
              <p className="text-xs text-gray-400 truncate">Sure! Give me 5 minutes.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main 
        className={`flex-1 flex flex-col bg-gray-900 min-w-0 ${
          !isSidebarOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        {/* Chat Header */}
        <header className="px-4 md:px-6 py-4 border-b border-gray-800 flex items-center justify-between bg-gray-950/50">
          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile Back / Toggle Sidebar Button */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-1.5 md:hidden text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm md:text-base shrink-0">
              JD
            </div>
            <div className="min-w-0">
              <h2 className="text-sm md:text-base font-semibold leading-tight truncate">Jane Doe</h2>
              <p className="text-xs text-green-400 flex items-center gap-1">
                Active now
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-2 md:p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all cursor-pointer">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="p-2 md:p-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer flex items-center gap-2">
              <Video className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm font-medium hidden sm:inline">Start Call</span>
            </button>
            <button className="p-2 md:p-2.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer">
              <MoreVertical className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </header>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-md rounded-2xl px-4 py-2.5 text-sm ${
                  msg.sender === 'me'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <footer className="p-3 md:p-4 border-t border-gray-800 bg-gray-950">
          <form onSubmit={handleSendMessage} className="flex items-center gap-1.5 md:gap-2">
            <button
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all cursor-pointer shrink-0"
            >
              <Paperclip className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all cursor-pointer shrink-0 hidden sm:block"
            >
              <ImageIcon className="h-5 w-5" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 min-w-0 bg-gray-800 rounded-xl px-3.5 md:px-4 py-2 md:py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="p-2 md:p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer shrink-0"
            >
              <Send className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
};

export default MessagePage;