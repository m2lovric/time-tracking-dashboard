import { BrowserRouter } from 'react-router-dom';
import './style.scss';

export default function MyApp({ Component, pageProps }) {
  return typeof window === 'undefined' ? null : <Component {...pageProps} />;
}
