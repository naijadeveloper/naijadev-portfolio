import type { AppProps } from "next/app";
import AppLayout from "../components/AppLayout";
import "../style/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
