import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p></p>
    </div>
  );
};



