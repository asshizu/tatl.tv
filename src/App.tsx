import React from 'react';
import Welcome from './welcome';
import Links from './links';
import Gif from './gif';
import Timer from './Timer'

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