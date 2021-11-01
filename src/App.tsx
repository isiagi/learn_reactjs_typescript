import React, {FC} from 'react';

import './App.css';
import { Enum, EyeColor } from './components/Enum';
import { Person } from './components/Person';
import { State } from './components/State';

const App: FC = () => {
 
  return (
    <div className="App">
      <Person name='Nalwanga' age={23} email='nalwanga@gmail.com'/>
      <State />
      <Enum name='Isiagi' age={25} email='geofrey' hairColor={EyeColor.red}/>
    </div>
  );
}

export default App;
