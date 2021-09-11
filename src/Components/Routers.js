import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Seacrh from '../Routes/Search';
import Detail from '../Routes/Detail';

export default function Routers() {
    return (
        <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component = { Home }></Route>
            <Route path="/search" component={ Seacrh }></Route>
            <Route path="/movie/:id" component= { Detail }></Route>
            <Route path="/tv" exact component={ TV }></Route>
            <Route path="/tv/:id" component= { Detail }></Route>
        </Switch>
        </Router>
    )
} 