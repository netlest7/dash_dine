import React, { ReactNode } from 'react';
import "./ui/Back.css"
interface BackProps {
  children: ReactNode;
}

const Back: React.FC<BackProps> = ({ children }) => {
  return (
    <div className='Back'>
      <div id='child' > {children}</div>
        <div className='Circle'>
       
        </div>
      
    </div>
  );
};

export default Back;
