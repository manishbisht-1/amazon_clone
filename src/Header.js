import React from "react";
import { Link } from "react-router-dom";
import image1 from ".//img/ama2.png";
import "./Header2.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ShoppingBasket } from "@material-ui/icons";
import {useStateValue} from "./StateProvider"
import { auth } from "./Firebase";

function Header() {
  const [{basket,user}]=useStateValue();

  // console.log(basket);
const login =()=>{
  if(user){
  auth.signOut();
}
};

  return (
    <nav className="header">
      {/* Amazon logo on the left */}
      <Link to="/">
        <img className="header_logo" src={image1} alt="logo image" />
      </Link>

      {/* Search bar */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header_nav"></div>
{/* link 1st */}
<Link  to={!user && "/login"} className="header_link">
<div onClick={login} className="header_option">
<span className="header_optionLineOne">hello {user?.email}</span>
<span className="header_optionLineTwo">{user ? 'sign out' :'sign in'}</span>
</div>
</Link>
{/* link 2nd  */}
<Link  to="/login" className="header_link">
<div className="header_option">
<span className="header_optionLineOne">returns</span>
<span className="header_optionLineTwo">orders</span>
</div>
</Link>

{/* link 3rd */}
<Link  to="/login" className="header_link">
<div className="header_option">
<span className="header_optionLineOne">your</span>
<span className="header_optionLineTwo">prime</span>
</div>
</Link>

{/* link 4th */}
<Link to="/checkout" className="header_link">
  <div className="header_optionBasket">
{/* shopping basket icon */}
  <ShoppingCartIcon/>
{/* number of the items in the basket */}
<span className="header_optionLineTwo header_basketCount">{basket?.length}</span>


  </div>
</Link>

      {/* basket withcounting */}
    </nav>
  );
}

export default Header;
