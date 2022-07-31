import { Button, Checkbox } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { Hero } from '../types';
import HeroCard from './HeroCard';
import sample from 'lodash.sample';
import RolePicker from './RolePicker';

type Props = {
  heroes: Hero[];
};

const HeroPicker = ({ heroes }: Props) => {
  const [isShown, setIsShown] = useState(false);
  const [hero, setHero] = useState<Hero>(heroes[0]);
  const [heroPool, setHeroPool] = useState<Hero[]>(heroes);

  const handleClick = () => {
    if (isShown === false) setIsShown(prev => !prev);

    const hero = sample(heroPool);

    if (hero) setHero(hero);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={handleClick}>Hero Randomizer</Button>
      </div>
      <RolePicker
        heroes={heroes}
        heroPool={heroPool}
        setHeroPool={setHeroPool}
      />
      {isShown && <HeroCard hero={hero} />}
    </>
  );
};

export default HeroPicker;
