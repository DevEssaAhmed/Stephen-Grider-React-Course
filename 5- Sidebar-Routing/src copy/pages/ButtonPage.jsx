import React from 'react'
import { GoBell } from 'react-icons/go';
import Button from '../components/Button';


const ButtonPage = () => {
      const handleClick = () => {
        alert('this is a button');
      };
  return (
    <div className='App'>
      <div>
        <Button primary rounded>
          Click Me
        </Button>
      </div>
      <div>
        <Button onClick={handleClick} secondary>
          <GoBell /> Alert
        </Button>
      </div>
      <div>
        <Button success>Click Me</Button>
      </div>
      <div>
        <Button danger>Click Me</Button>
      </div>
      <div>
        <Button primary outline rounded>
          Click Me
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage