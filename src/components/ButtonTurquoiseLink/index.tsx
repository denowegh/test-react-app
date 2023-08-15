import React from 'react';
import { Link } from 'react-scroll';
import store from '../../store';
import { increment } from '../../store/countKlikSlice';

interface Props {
    id?: string;
    children:React.ReactNode;
    
}

const ButtonTurquoiseLink = ({children, id}:Props): JSX.Element => {

    const onClick = () =>{
        store.dispatch(increment());
        console.log(store.getState().countKlik.value);
    }
    
    return (
    <Link
      to={`${id}`} 
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClick}
    >
        
        {children}
    </Link>
    );
};

export default ButtonTurquoiseLink;