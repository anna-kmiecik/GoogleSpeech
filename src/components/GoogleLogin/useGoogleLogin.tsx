import { useState } from "react";
import { TokenResponse, useGoogleLogin } from "@react-oauth/google";

export function useGoogleLoginHook() {
  const [credentials, setcredentials] = useState<TokenResponse>();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse:any) => {
      setcredentials(tokenResponse);
    },
    scope: "https://www.googleapis.com/auth/cloud-platform",
  });

  return ({credentials, login});
}
