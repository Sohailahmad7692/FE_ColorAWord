import React, { useState } from 'react';
import axios from 'axios';
import ColorInput from './component/ColorInput';
import ColorCard from './component/ColorCard';
import Loader from './component/Loader';
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchColors = async (word) => {
    setLoading(true);
    if (colors.length > 0) {
      setColors([]);
    }
    try {
      const response = await axios.post('https://be-coloraword.onrender.com/api/colors', { word }); // Set timeout to 10 seconds (adjust as needed)
      setColors(response.data);
    } catch (error) {
      console.error('Error fetching colors:', error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is done
    }
  };

  return (
    <div className="App">
      <ColorInput fetchColors={fetchColors} />
      {loading ? <Loader /> : null} {/* Show loader if loading is true */}
      <div className="color-grid">
        {colors.map((color, index) => (
          <ColorCard key={index} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;