import { HeroUIProvider } from "@heroui/react";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Layouts from "@/components/layouts/Layouts";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ReactQueryProvider>
        <HeroUIProvider>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </HeroUIProvider>
      </ReactQueryProvider>
    </>
  );
}
