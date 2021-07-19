// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { SWRConfig } from "swr";
import customFetcher from "../services/fetcher";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SWRConfig
      value={{
        fetcher: customFetcher,
        revalidateOnFocus: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
