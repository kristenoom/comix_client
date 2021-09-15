import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Comix from './Comix';
import Wishlist from './Wishlist';
import Auth from '../auth/Auth';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/auth'>Sign-Up / Login</Link></li>
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
                    <Route exact path='/auth'><Auth /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;