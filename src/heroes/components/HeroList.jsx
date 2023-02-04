import { useMemo } from 'react';

import { getHeroesByPublisher } from '../helpers';

import HeroCard from './HeroCard';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() =>  getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row rows-col-1 row-cols-md-3 g-3'>
      {heroes.map((heroe) => (
        // <li key={heroe.id}>{heroe.superhero}</li>
        <HeroCard 
          key={heroe.id}
          {...heroe}
        />
      ))}
    </div>
  )
}
