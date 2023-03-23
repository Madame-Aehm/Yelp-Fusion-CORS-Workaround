import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async() => {
    try {
      const response = await fetch('http://localhost:3001/dentists&hamburg&dentists&rating&de_DE');
      const result = await response.json();
      console.log(result);
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])
  
  

  return (
    <div className="App">
      <p>I created this small project to test whether the Yelp Fusion API can be requested from a server, since all client side requests are blocked by CORS.</p>
      { loading && <p>Loading....</p> }
      { error && <p>It appears something went wrong. Check console for error status.</p> }
      { success && <p>Looks like it worked? Check console to view result.</p> }
    </div>
  );
}

export default App;
