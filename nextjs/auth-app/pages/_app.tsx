import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { getCookie } from "cookies-next";
import {
  AbpApplicationConfigurationService,
  OpenAPI as ApiOptions,
} from "../generated/api";
import { useEffect } from "react";
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  ApiOptions.BASE = getCookie("next-auth.issuer") as string;
  ApiOptions.HEADERS = {
    __tenant: getCookie("__tenant") as string,
  } as Record<string, string>;
  
  useEffect(() => {
    AbpApplicationConfigurationService.abpApplicationConfigurationGet().then(
      (res) => {
        console.log(res);
      }
    );
  }, []);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
