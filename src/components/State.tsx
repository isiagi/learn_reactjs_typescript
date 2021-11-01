import { FC, useState, ChangeEvent } from 'react';

export interface Props {}

export const State: FC<Props> = (props) => {
  const [country, setCountry] = useState<string | null>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Write down your contry..."
        onChange={handleChange}
      />
      {country}
    </div>
  );
};
