import Header from './Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


export default function Routers() {
    return (
        <Router>
        <Header/>
        <Switch>
            <Route path="/"></Route>
            <Route path="/tv"></Route>
            <Route path="/search"></Route>
            <Route path="/movie:id"></Route>
            <Route path="/tv:id"></Route>
        </Switch>
        </Router>
    )
} 