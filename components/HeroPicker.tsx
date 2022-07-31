import { Button, Checkbox } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { Hero } from '../types';
import HeroCard from './HeroCard';
import sample from 'lodash.sample';

type Props = {
  heroes: Hero[];
};

const HeroPicker = ({ heroes }: Props) => {
  const [isShown, setIsShown] = useState(false);
  const [isTank, setIsTank] = useState(true);
  const [isDps, setIsDps] = useState(true);
  const [isSupport, setIsSupport] = useState(true);
  const [hero, setHero] = useState<Hero>(heroes[0]);
  const [heroPool, setHeroPool] = useState<Hero[]>(heroes);

  const handleClick = () => {
    if (isShown === false) setIsShown(prev => !prev);

    const hero = sample(heroPool);

    if (hero) setHero(hero);
  };

  const tankClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === 'tank')));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== 'tank'));
    }
    setIsTank(e.currentTarget.checked);
  };

  const dpsClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === 'dps')));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== 'dps'));
    }
    setIsDps(e.currentTarget.checked);
  };

  const supportClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setHeroPool(heroPool.concat(heroes.filter(e => e.role === 'support')));
    } else {
      setHeroPool(heroPool.filter(e => e.role !== 'support'));
    }
    setIsSupport(e.currentTarget.checked);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button onClick={handleClick}>Hero Randomizer</Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginTop: '1rem',
        }}
      >
        <Checkbox checked={isTank} onChange={tankClickHandler} label="Tank" />
        <Checkbox checked={isDps} onChange={dpsClickHandler} label="DPS" />
        <Checkbox
          checked={isSupport}
          onChange={supportClickHandler}
          label="Support"
        />
      </div>
      {isShown && <HeroCard hero={hero} />}
    </>
  );
};

export default HeroPicker;
