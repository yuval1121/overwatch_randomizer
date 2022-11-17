import { Checkbox, createStyles } from '@mantine/core';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Hero } from '../types';

const useStyles = createStyles(() => ({
  rolepicker: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '1rem',
    columnGap: '0.5rem',
  },
}));

type Props = {
  heroes: Hero[];
  setHeroPool: Dispatch<SetStateAction<Hero[]>>;
};

const RolePicker = ({ heroes, setHeroPool }: Props) => {
  const { classes } = useStyles();
  const [isTank, setIsTank] = useState(true);
  const [isDps, setIsDps] = useState(true);
  const [isSupport, setIsSupport] = useState(true);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    role: 'dps' | 'support' | 'tank'
  ) => {
    const isChecked = e.currentTarget.checked;

    if (isChecked) {
      setHeroPool(prevHeroPool => [
        ...prevHeroPool,
        ...heroes.filter(e => e.role === role),
      ]);
    } else {
      setHeroPool(prevHeroPool => prevHeroPool.filter(e => e.role !== role));
    }

    switch (role) {
      case 'dps': {
        setIsDps(isChecked);
        break;
      }
      case 'support': {
        setIsSupport(isChecked);
        break;
      }
      case 'tank': {
        setIsTank(isChecked);
        break;
      }
    }
  };

  return (
    <div className={classes.rolepicker}>
      <Checkbox
        checked={isTank}
        onChange={e => handleChange(e, 'tank')}
        label="Tank"
      />
      <Checkbox
        checked={isDps}
        onChange={e => handleChange(e, 'dps')}
        label="DPS"
      />
      <Checkbox
        checked={isSupport}
        onChange={e => handleChange(e, 'support')}
        label="Support"
      />
    </div>
  );
};

export default RolePicker;
