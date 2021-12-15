import './App.css';
import data from './data/data.json'
import Card from './components/Card/Card'
import SkeletonCard from './components/SkeletonCard/SkeletonCard';
import React, { useState, useEffect } from "react";


const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(data);
      setLoading(false);
    }, 4000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      {loading && <SkeletonCard />}
      {!loading && <Card/> }
    </div>
  );
}

export default App;
