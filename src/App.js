import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog'; 
import './css/index.css';

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <section className='container'>
      <div className="app">
        <StarRating />
        <button className='dialog' onClick={handleOpenDialog}>Open Dialog</button>
        {dialogOpen && <Dialog onClose={handleCloseDialog} />} {/* Render Dialog component */}
      </div>
    </section>
  );
};

export default App;
