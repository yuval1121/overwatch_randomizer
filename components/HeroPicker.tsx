import { Button } from '@mantine/core';
import { useState } from 'react';
import { Hero } from '../types';
import HeroCard from './HeroCard';
import sample from 'lodash.sample';

type Props = {
  heroes: Hero[];
};

const HeroPicker = ({ heroes }: Props) => {
  const [isShown, setIsShown] = useState(false);
  const [hero, setHero] = useState<Hero>(heroes[0]);

  const handleClick = () => {
    if (isShown === false) {
      setIsShown(prev => !prev);
    }
    const hero = sample(heroes);

    if (hero) setHero(hero);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
      <Button onClick={handleClick}>Hero Randomizer</Button>
      {isShown && <HeroCard hero={hero} />}
    </div>
  );
};

export default HeroPicker;
