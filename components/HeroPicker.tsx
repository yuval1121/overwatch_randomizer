import { Button } from '@mantine/core';
import { useState } from 'react';
import { Hero } from '../types';
import HeroCard from './Hero';

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

    const min = Math.ceil(1);
    const max = Math.floor(heroes.length);
    const rand = Math.floor(Math.random() * (max - min) + min);

    const hero = heroes.find(e => e.id === rand);

    if (hero) {
      setHero(hero);
    } else {
      setHero(heroes[0]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button onClick={handleClick}>Hero Randomizer</Button>
      {isShown && <HeroCard title="test1" image="none" hero={hero} />}
    </div>
  );
};

export default HeroPicker;