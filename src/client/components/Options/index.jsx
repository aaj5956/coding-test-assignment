import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { ChoiceContext, DelayContext } from 'contexts/Home';
import 'styles/options.css';

const Options = () => {
  const { choice, setChoice } = useContext(ChoiceContext);
  const { delay, setDelay } = useContext(DelayContext);

  const handleChoiceChange = (event) => {
    setChoice(event.target.value);
  };
  
  const handleDelayChange = (event) => {
    setDelay(event.target.value);
  };

  return (
    <section className="options">
      <FormControl component="fieldset" className="options">
        <FormLabel component="legend">Choice</FormLabel>
        <RadioGroup row aria-label="position" name="position" value={choice} onChange={handleChoiceChange}>
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="Cats"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label="Sharks"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label="Mix"
          />
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className="options">
        <FormLabel component="legend">Loader delay</FormLabel>
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