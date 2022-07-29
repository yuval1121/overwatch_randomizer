import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import useUIStore from '../store/store';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  const bears = useUIStore(state => state.colorScheme);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
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
