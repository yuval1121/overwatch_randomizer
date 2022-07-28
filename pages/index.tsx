import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Store Project</title>
        <meta name="description" content="Store website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to next</h1>
    </div>
  );
};

export default Home;
