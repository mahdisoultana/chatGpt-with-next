import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
function AppContext({ children }: { children: React.ReactNode }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const stopListening = React.useCallback(async () => {
    await SpeechRecognition.stopListening();
    resetTranscript();
  }, []);
  const startListening = React.useCallback((): void => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  }, []);

  return (
    <appContext.Provider
      value={{
        startListening,
        stopListening,
        transcript,
        listening,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

const appContext = React.createContext({
  stopListening: () => {},
  startListening: () => {},

  transcript: '',
  listening: false,
});

export const useSpeech = () => {
  const contextValue = React.useContext(appContext);
  if (!contextValue)
    throw new Error(
      'please you need to useSpeech inside `<AppContext> Provider`',
    );

  return contextValue;
};

export default AppContext;
