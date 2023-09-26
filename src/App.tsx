import React from 'react';
React
import Welcome from './welcome';
import Links from './links';
import Gif from './gif';
import Timer from './timer'

function App() {
  return (
    <div className="bg-black">
      <Gif />
      <Links />
      <Welcome />
      <Timer />
    </div>
  );
}
export default App;