

import { useEffect, useState } from "react";


function CatFacts(){
    const [facts, setFacts] = useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] =useState(null);

useEffect(()=>{
    fetch("https://catfact.ninja/facts?limit=5")
    .then((response)=>{
        if(!response.ok) {
            throw new Error("Noe gikk galt");
        }
        return response.json();
    })
    .then((data)=>{
        setFacts(data.data);
        setLoading(false);
    })
    .catch ((err) => {
        setError(err.message);
        setLoading(false);
    });
}, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Feil...{error}</p>;

    return (
      <div className="cat-facts-container">
        <h2>Cat Facts</h2>
        <ul>
          {facts.map((fact, index) => (
            <li key={index}>🐱{fact.fact}</li>
          ))}
        </ul>
      </div>
    );
}

export default CatFacts;