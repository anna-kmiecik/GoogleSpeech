import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { GoogleLoginButton } from "./components/GoogleLogin/GoogleLogin";

function App() {
  return (
    <GoogleOAuthProvider clientId="305509950161-8ug9gm5fbi4bdf82mothbp6e70tlue6t.apps.googleusercontent.com">
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Welcome <code>SSML</code> to test.
          </p>
          <GoogleLoginButton />
         {/* <TextToSpeech text="Hello World" /> */}
        </header>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
