export type Message = {
  type: 'audio' | 'text';
  message: string;
  sender: 'me' | 'chatGPT';
  transcript?: string | null;
};
