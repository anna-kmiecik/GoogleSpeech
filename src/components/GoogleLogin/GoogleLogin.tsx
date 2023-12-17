import { GoogleApiTextToSpeech } from "../speechApi/GoogleApiTextToSpeech";
import { useGoogleLoginHook } from "./useGoogleLogin";

export const GoogleLoginButton = () => {
  const { credentials, login } = useGoogleLoginHook();

  return (
    <>
      {credentials?.access_token && (
        <p>
          Welcome user <code>login to google </code> succeded.
        </p>
      )}
      {!credentials?.access_token && (
        <button onClick={() => login()}>Login to google</button>
      )}
      {credentials?.access_token && (
        <GoogleApiTextToSpeech token={credentials?.access_token} />
      )}
      {/* <GoogleLogin
        onSuccess={(response) => {
          console.log(response);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
    </>
  );
};
