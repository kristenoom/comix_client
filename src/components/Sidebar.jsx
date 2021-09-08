import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Comix from './Comix';
import Wishlist from './Wishlist';
// import Resources from './Resources';
// import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
// import JSXRules from '../concepts/JSXRules';
// import State from '../concepts/State';
// import Effects from '../concepts/Effects';
// import PropsDemo from '../concepts/PropsDemo';
// import Hooks from '../concepts/Hooks';
// import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
// import NytApp from '../apps/nyt-app/NytApp';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/comix'>Comic Book Log</Link></li>
                    <li><Link to='/wishlist'>Wishlist</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/comix'><Comix /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/wishlist'><Wishlist /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;