import React,{useContext} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext,firebaseContext } from '../../Store/FirebaseContext';
import {getAuth} from 'firebase/auth';
import {useHistory} from 'react-router-dom'

function Header() {
  const history = useHistory()
  const auth = getAuth()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(firebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span style={{cursor:'pointer'}} onClick={()=>{history.push('/login')}}>{user ? user.email:'login'}</span>
          <hr />
       

        </div>
        {user && <span onClick={()=>{
          auth.signOut().then(() => {
              history.push('/login')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        }}>logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{history.push('/create')}}>{user ? 'SELL':''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
