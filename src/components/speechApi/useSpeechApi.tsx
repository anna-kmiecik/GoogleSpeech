import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

export const useSpeechApi = (token: string)=>{
    const [playing, setPlaying] = useState(false);
    const [text, setText] = useState(
      '<speak> <voice language="pl-PL" gender="female">Anna Kmiecik</voice><break time="250ms"/> ABC Google Cloud Text-to-Speech enables developers to synthesize natural-sounding speech with 100+ voices, available in multiple languages and variants. It applies DeepMinds groundbreaking research in WaveNet and Google powerful neural networks to deliver the highest fidelity possible. As an easy-to-use API, you can create lifelike interactions with your users, across many applications and devices.</speak>'
    );
    const [audio, setAudio] = useState<HTMLAudioElement>();
  
    useEffect(
      () => () => {
        audio?.remove();
      },
      [audio]
    );
  
    const playSound = useCallback(
      debounce(async () => {
        if (!token) {
          throw new Error("No token");
        }
        const response = await fetch(
          "https://texttospeech.googleapis.com/v1/text:synthesize",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              input: {
                ssml: text,
              },
              voice: {
                languageCode: "en-US",
                name: "en-US-Wavenet-D",
                ssmlGender: "FEMALE",
              },
              audioConfig: {
                audioEncoding: "MP3",
              },
            }),
          }
        );
  
        if (!response.ok) {
          throw new Error(`Network response was not ok ${response.status}`);
        }
  
        const data = await response.json();
        if (audio) {
          audio.pause();
          audio.remove();
        }
        const audioStream = new Audio(
          `data:audio/mp3;base64,${data.audioContent}`
        );
        setAudio(audioStream);
        setPlaying(true);
        await audioStream.play();
        setPlaying(false);
      }, 500),
      [audio, text, token]
    );
  
    return ({text, setText, playSound, playing, audio});
}