import React, { useContext, useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { ChoiceContext, DelayContext } from 'contexts/Home';
import 'styles/options.css';

const Options = () => {
  const { setChoice } = useContext(ChoiceContext);
  const { delay, setDelay } = useContext(DelayContext);
  const [ cats, setCats ] = useState(true);
  const [ sharks, setSharks ] = useState(false);

  useEffect(() => {
    const { key } = {
      ...(cats && !sharks && { 'key': '1'}),
      ...(!cats && sharks && { 'key': '2'}),
      ...(cats && sharks && { 'key': '3'}),
      ...(!cats && !sharks && { 'key': 'invalid'}), 
    };
    
    setChoice(key);
  }, [cats, sharks]);
  
  const handleDelayChange = (event) => {
    setDelay(event.target.value);
  };

  const handleCatsClick = () => {
    setCats(!cats);
  }

  const handleSharksClick = () => {
    setSharks(!sharks);
  }

  return (
    <section className="options">
      <div className='button-row'>
        <Button style={{ margin: 8 }} variant={cats ? 'contained' : 'outlined'} color="primary" onClick={handleCatsClick}>Cats</Button>
        <Button style={{ margin: 8 }} variant={sharks ? 'contained' : 'outlined'} color="primary" onClick={handleSharksClick}>Sharks</Button>
      </div>
      <FormControl component="fieldset" className="options">
        <FormLabel>Loader delay</FormLabel>
        <RadioGroup row aria-label="position" name="position" value={delay} onChange={handleDelayChange}>
          <FormControlLabel
            value="0"
            control={<Radio color="primary" />}
            label="None"
          />
          <FormControlLabel
            value="1000"
            control={<Radio color="primary" />}
            label="1 sec"
          />
          <FormControlLabel
            value="5000"
            control={<Radio color="primary" />}
            label="5 secs"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
}

export default Options;