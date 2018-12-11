import React, {Suspense} from 'react';
import {Header} from '../component/Shared';
import Contact from '../component/Contact';
import Home from '../component/Home';
import {Switch, Route} from 'react-router-dom';
import '../style/style.scss';

const About = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(() => {
        return import ("../component/About/index.js");
    });
});

export default class AppLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header active={this.props.active}/>
                <main>
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>
                        <Route
                            exact
                            path="/about"
                            render={() => {
                            return (
                                <div>
                                    <Suspense fallback={< div > Loading ...</div>}>
                                        <About/>
                                    </Suspense>
                                </div>
                            )
                        }}/>
                        <Route exact path="/contact" render={() => <Contact/>}/>
                    </Switch>
                </main>
            </div>
        )
    }
}
