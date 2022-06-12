import React, {FunctionComponent} from 'react';
import {Link, Route} from 'react-router-dom';
import ListePays from './ListePays';
import PaysDetail from './PaysDetail';

const Header : FunctionComponent = () => {
    return (
        <div className="header">
            <h1 className='title'>Liste des pays</h1>
            <p className='lien'><Link to="/" className='lien'>Tous les pays</Link></p>
        </div>
    )
}

export default Header;