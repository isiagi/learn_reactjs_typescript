import { FC} from 'react';

export enum EyeColor {
    blue = 'heyy',
    red = 'hello',
    grey = 'kdki'
}

export interface Props {
    name: string;
    age: number;
    email:string;
    hairColor: EyeColor;  
}



export const Enum: FC<Props> = ({name, age, email, hairColor}) =>{
    //Example of types below
    type NameType = 'john' | 'doe' | 'mary' | 'jane'
    const nameOfType: NameType = 'john'
    //

  return (
    <div>
      {/* {EyeColor.red} */}
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <h1>{hairColor}</h1>
      <h1>{nameOfType}</h1>
    </div>
  );
}
