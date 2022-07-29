import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import useUIStore from '../store/store';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';

function MyApp({ Component, pageProps }: AppProps) {
  const bears = useUIStore(state => state.colorScheme);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{
        colorScheme: bears,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
