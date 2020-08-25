import ReactDOM from 'react-dom';
import { useEffect } from 'react';

const Portal = ({ children }) => {
  
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    } 
  }, [])

  return ReactDOM.createPortal(children, el);
}

export default Portal