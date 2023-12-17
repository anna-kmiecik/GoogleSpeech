import { useSpeechApi } from "./useSpeechApi";

export function GoogleApiTextToSpeech({ token }: { token: string }) {
const { playing, text, audio, setText, playSound } = useSpeechApi(token);
  return (
    <div>
      {/* <label>
        test:
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          defaultValue="1"
          onChange={() => {}}
        />
      </label> */}
      <div>
        <textarea
          rows={5}
          cols={35}
          // readOnly={true}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder={"Read only textarea"}
        />
      </div>

      <button onClick={playSound} disabled={playing}>
        Play Sound
      </button>

      <button
        onClick={() => {
          audio?.pause();
        }}
        disabled={playing}
      >
        Stop Sound
      </button>
    </div>
  );
}
