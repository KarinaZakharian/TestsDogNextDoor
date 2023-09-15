/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import { ChangeEvent, useState } from 'react';

import './TestRadio.scss';

interface FieldProps {
  name: string;
  id: string | undefined;
  value: string;
}

function Radio({ name, id, value }: FieldProps) {
  const [picked, setPicked] = useState('');
  console.log(picked);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setPicked(event.target.value);
  }

  return (
    <div className="form__radio">
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        className="form__radio-input"
        checked={picked === value}
        onChange={handleChange}
      />
      <label htmlFor={id} className="form__radio-label small">
        <span className="form__text">{value}</span>
        <span className="form__text">
          {value === 'Petit'
            ? '0 - 7 kg'
            : value === 'Moyen'
            ? '7 - 18 kg'
            : value === 'Grand'
            ? '18 - 45 kg'
            : '45+ kg'}
        </span>
      </label>
    </div>
  );
}

// == Export
export default Radio;
