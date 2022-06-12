import {FunctionComponent} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from './components/Header';
import ListePays from './components/ListePays';
import PaysDetail from './components/PaysDetail';

const App:FunctionComponent = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<ListePays/>}/>
                <Route path="/pays/:id" element={<PaysDetail/>}/>
                <Route path="*" element={<ListePays />} />
            </Routes>
        </Router>
    )
}

export default App;