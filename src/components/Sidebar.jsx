import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import ComicIndex from '../comics/ComicIndex';
import WishlistIndex from '../wishlist/WishlistIndex';
import Auth from '../auth/Auth';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Discover Comics</Link></li>
                    <li><Link to='/auth'>Sign-Up / Login</Link></li>
                    <li><Link to='/comic'>Comic Book Log</Link></li>
                    <li><Link to='/wishlist'>Comic Wishlist</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/comix'><ComicIndex/></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/wishlist'><WishlistIndex /></Route>
                    <Route exact path='/auth'><Auth /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;