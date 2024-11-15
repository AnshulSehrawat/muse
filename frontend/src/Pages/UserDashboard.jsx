import React, {useEffect, useState} from 'react'
// import Axios from 'axios';
import './Styles/UserDashboard.css'
import AccountIcon from "../Assets/images/your-account.png"
import OrdersIcon from "../Assets/images/orders.png"
import CartIcon from "../Assets/images/cart.png"
import WishlistIcon from "../Assets/images/wishlist.png"
import Admin from "../Assets/images/admin.png"
import AccountSection from "../components/AccountSection.jsx" 
import OrdersSection from "../components/OrdersSection.jsx" 
import CartSection from "../components/CartSection.jsx" 
import Wishlist from "../components/Wishlist.jsx" 
import AdminSection from "../components/AdminSection.jsx" 

function UserDashboard() {
  // const[data, setData] = useState("");
  // const getData=async()=>{
  //   const response=await Axios.get("http://localhost:5000/getData");
  //   setData(response.data);
  // }
  // useEffect(() => {
  //   getData();
  // }, [])
  const[selectedOption, setSelectedOption] = useState("");
  const renderComponent = () => {
    switch (selectedOption) {
      case 'Account':
        return <AccountSection />;
      case 'Orders':
        return <OrdersSection />;
      case 'Cart':
        return <CartSection />;
      case 'FavProduct':
        return <Wishlist />;
      case 'Admin':
        return <AdminSection />;
      default:
        return <AccountSection/>;
    }
  };
  return (
    <div className='Dashboard-main-container'>
    <div className="Dashboard-option-container">
        <button onClick={() => setSelectedOption("Account")}>
          <img src={AccountIcon} alt="" /> My Account
        </button>
        <button onClick={() => setSelectedOption("Orders")}>
          <img src={OrdersIcon} alt="" /> Orders
        </button>
        <button onClick={() => setSelectedOption("Cart")}>
          <img src={CartIcon} alt="" /> Cart
        </button>
        <button onClick={() => setSelectedOption("FavProduct")}>
          <img src={WishlistIcon} alt="" /> Wishlist
        </button>
        <button onClick={() => setSelectedOption("Admin")}>
          <img src={Admin} alt="" /> Admin Section
        </button>
      </div>
    <div className="Dashboard-component-container">
    {renderComponent()}
    </div>
    </div>
  )
}

export default UserDashboard
