import "../style/global.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/AppLayout";
import { store } from "../store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
