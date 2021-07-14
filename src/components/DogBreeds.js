import React from 'react';
import {useHistory} from 'react-router-dom';

const DogBreeds = (props) => {
    const history = useHistory();
    const { breeds } = props;

    return (
      <ul>
        {breeds.map((name) => (
          <li 
            onClick={() => {history.push(`/breeds/${name}`)}} 
            className="breedName"
          >{name}
          </li>   
        ))}
      </ul>
    );
}

export default DogBreeds;