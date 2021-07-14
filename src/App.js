
import './App.css';
import { useEffect, useState } from 'react';
import DogBreeds from './components/DogBreeds';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [breeds, setBreeds] = useState([]);


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBreeds(Object.keys(result.message));
          console.log("result", result);
          console.log(Object.keys(result.message));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
      <div className="App">
          <DogBreeds breeds={breeds}/>
      </div>
    );
  }
}

export default App;
