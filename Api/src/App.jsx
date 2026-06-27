// import React from "react";
// import UserContext from "./UserContext"; 
// import Navbar from "./Navbar";
// const App = () => {
//   const user="geeta universe";
//   return (
//     <div>
//       <UserContext.Provider value={user}>
//         <navbar/>
//       </UserContext.Provider>
//     </div>
//   )
// }
// export default App



import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

import './index.css';

const MainApp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Current Mode: {theme.toUpperCase()}</h1>
      <button onClick={toggleTheme} className="toggle-btn">
        Switch to {theme === 'light' ? 'Dark ' : 'Light '}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;