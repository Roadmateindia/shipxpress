import React from 'react';
// import '../Css/Navbar.css'

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className="topbar d-flex justify-content-between flex-wrap">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between flex-wrap">

        {/* Toggle button */}
        <i
          className="bi bi-list togglebtn"
          onClick={toggleSidebar}
          
        ></i>

        {/* Shipment button and search bar */}
        <div className="shipment-box btn-group " >
          <button className="btn">
            <p>
              Shipment <i className="bi bi-caret-down-fill"></i>
            </p>
          </button>
          <input type="text" placeholder="search AWB Number(s)" />
        </div>

        {/* Search button */}
        <button className="search-box">
          <i className="bi bi-search"></i>
        </button>

        {/* Recharge box */}
        <div className="btn-group rechargebox">
          <div className="rechargebutton">
            <button className='btn' style={{color:'white'}}>
              <i className="bi bi-lightning-charge-fill" style={{color:'white'}}></i> Recharge
            </button>
          </div>
          <button className="btn">Balance ₹ 2964.3</button>
        </div>

        {/* WhatsApp redirect */}
        <div className="whatsapp-redirect">
          <i className="bi bi-grid-3x3-gap-fill"></i>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
