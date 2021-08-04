import React from 'react';
import ReactDOM from 'react-dom';
import SearchArea from './SearchArea';
import { Router } from '@reach/router'
import WatchArea from './WatchArea';
import Logo from './images/logoMao.jpg'

const App = () => {
    return (
        <div>
            <header>
                <a href="/">
                    <img src={Logo} alt="Logo" />
                    Video Browser
                </a>
            </header>
            <Router>
                <SearchArea path="/" />
                <WatchArea path="/watch/:id" />
            </Router>

        </div>
    )

};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
