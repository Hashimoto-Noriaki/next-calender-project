import '../styles/index.css';
import '../styles/destyle.css';
import type { AppProps } from 'next/app';
import NotLoginLayout from '../components/templates/NotLoginLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NotLoginLayout>
      <Component {...pageProps} />
    </NotLoginLayout>
  ) 
}

export default MyApp;