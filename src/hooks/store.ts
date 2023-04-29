import { create } from 'zustand';
import { Message } from './types';

export const useMessages = create<{
  messages: Message[];
  setMessages: (m: Message) => void;
}>((set, get) => ({
  messages: [{ type: 'text', message: 'hello', sender: 'chatGPT' }],
  setMessages: (message: Message) => {
    set({ messages: [...get().messages, message] });
  },
}));
