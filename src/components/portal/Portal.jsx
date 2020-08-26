import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

const Portal = ({ children, isOpen }) => {
  
  const [elem, setElem] = useState(null)

  useEffect(() => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    setElem(el)
    return () => {
      document.body.removeChild(el);
    } 
  }, [])

  if(!elem || !isOpen) return null
  if(elem && isOpen) return  ReactDOM.createPortal(children, elem);

}

export default Portal