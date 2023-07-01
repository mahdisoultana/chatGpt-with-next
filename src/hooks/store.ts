import { create } from 'zustand';
import { Message } from './types';

export const useMessages = create<{
  messages: Message[];
  setMessages: (m: Message) => void;
}>((set, get) => ({
  messages: [{ type: 'text', message: 'Hi how are you ?', sender: 'chatGPT' }],
  setMessages: (message: Message) => {
    set({ messages: [...get().messages, message] });
  },
}));
