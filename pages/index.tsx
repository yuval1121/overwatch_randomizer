import type { GetStaticProps, NextPage } from 'next';
import path from 'path';
import HeroPicker from '../components/HeroPicker';
import { Hero } from '../types';
import { promises as fs } from 'fs';

type Props = {
  heroes: Hero[];
};

const Home: NextPage<Props> = ({ heroes }) => {
  return (
    <>
      <HeroPicker heroes={heroes} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');

  const fileContents = await fs.readFile(jsonDirectory + '/heroes.json');
  const data = JSON.parse(fileContents.toString());

  return {
    props: { heroes: data },
  };
};

export default Home;
