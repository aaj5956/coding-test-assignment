import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { ChoiceContext } from 'contexts/Home';
import 'styles/options.css';

const Options = () => {
  const { choice, setChoice } = useContext(ChoiceContext);

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <section className="options">
      <FormControl component="fieldset" className="options">
        <FormLabel component="legend" className="label">Choice</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue={choice}>
          <FormControlLabel
            value="1"
            control={<Radio color="primary" onChange={handleChange} />}
            label="Cats"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" onChange={handleChange} />}
            label="Sharks"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" onChange={handleChange} />}
            label="Mix"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
}

export default Options;