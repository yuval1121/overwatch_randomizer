import { Anchor } from '@mantine/core';
import { NextPage } from 'next';
import Meta from '../../components/Meta';

const About: NextPage = () => {
  return (
    <div>
      <Meta title="about" />
      <Anchor href="https://github.com/yuval1121">My Github</Anchor>
    </div>
  );
};

export default About;
