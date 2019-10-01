import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginPage } from '../src/LoginPage/LoginPage';
import {ProductIDNavbar} from '../src/components/ProductIDNavbar/ProductIDNavbar';
import {Header} from '../src/components/Header/Header';
import {ProductCard} from '../src/components/ProductCard/ProductCard';
import {ComparePage} from '../src/ComparePage/ComparePage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router>
                            <div>
                                {/* <Switch> */}
                                {/* <Route path="/" component={LoginPage} /> */}
                                <Route path="/login" component={LoginPage} />
                                <Route path="/productID" component={ProductIDNavbar} />
                                <Route path="/header" component={Header} />
                                <Route path="/productcard" component={ProductCard} />
                                <Route path="/comparepage" component={ComparePage} />
                                {/* </Switch> */}
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;