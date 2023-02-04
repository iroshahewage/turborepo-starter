import '@styles/globals.css';
import '@styles/nprogress.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Poppins } from '@next/font/google';
import Router from 'next/router';
import NProgress from 'nprogress';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// Router Event Handle NProgress
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <ThemeProvider enableSystem attribute="class" storageKey="kd-theme">
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
