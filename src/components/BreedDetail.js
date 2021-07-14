import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const BreedDetail = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pictures, setPictures] = useState([]);
  let { breedName } = useParams();

  console.log({breedName});


  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breedName}/images`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPictures(result.message);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>

      
      {pictures.map((picture) => (
        <li key={picture}>
          <img src={picture} alt={picture}/>
        </li>
      ))}
      </ul>
      
    );
  }
}

export default BreedDetail;