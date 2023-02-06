import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { Navigate } from 'react-router-dom';

function renderError() {
  localStorage.clear();

  if (window.confirm('Please sign in to continue!')) {
    return <Navigate to="/launch" />;
  } else {
    return <Navigate to="/home" />;
  }
  
}

export function PrivatePage({ children } : {children: JSX.Element}) {

  const auth = JSON.parse(localStorage.getItem('plantshop') || 'false');

  if (!auth) {
    return renderError();
  }

  return (
    <>
      <Navbar />
      <>
        {children}
      </>
      <Footer />
    </>
  );
    
}