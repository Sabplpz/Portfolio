import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  //   if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <About />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* {renderPage()} currentPage={currentPage} handlePageChange={handlePageChange} */}
    </div>
  );
}
