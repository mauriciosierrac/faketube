import React from 'react';
import ReactDOM from 'react-dom';
import SearchArea from './SearchArea';
import { Router } from '@reach/router'
import WatchArea from './WatchArea';

const App = () => {
    return (
        <div>
            {/* <header>
                <a href="/">
                </a>
            </header> */}
            <img src="logoMao.jpg" alt="Logo"/>
            <Router>
                <SearchArea path="/" />
                <WatchArea path="/watch/:id" />
            </Router>

        </div>
            )

            };
            ReactDOM.render(React.createElement(App), document.getElementById("root"));
