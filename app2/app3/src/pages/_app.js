import '@/styles/assets/css/theme-1.css'
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="/assets/fontawesome/js/all.min.js" />
      <Component {...pageProps} />
    </>
  );
}
