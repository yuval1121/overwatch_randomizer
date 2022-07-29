import Head from 'next/head';

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta = ({
  title = 'Overwatch Randomizer',
  keywords = 'Overwatch Random',
  description = 'Randomly picks a hero for you to play',
}: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="urf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
