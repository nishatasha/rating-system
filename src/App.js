import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './css/index.css';

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openDialogClicked, setOpenDialogClicked] = useState(false); 
  const handleOpenDialog = () => {
    setDialogOpen(true);
    setOpenDialogClicked(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setOpenDialogClicked(false); 
  };

  return (
    <section className='container'>
      <div className="app">
        <StarRating />
      </div>
      
      {!openDialogClicked && <button className="dialog" onClick={handleOpenDialog}>Open Dialog</button>}
      {dialogOpen && <Dialog onClose={handleCloseDialog} />}
    </section>
  );
};

export default App;
