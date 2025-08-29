import React from 'react';
import Logo from '../assets/img1.jpg';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`sidebar-background ${isOpen ? 'open' : 'collapsed'}`}
      style={{
        width: isOpen ? '200px' : '60px',
        transition: 'width 0.3s ease',
        overflow: 'hidden'
      }}
    >
      {/* Logo */}
      <div className="roadmate-logo ">
        <img
          src={Logo}
          alt="Logo"
        
        />
        
      </div>

      {/* Menu Items */}
      <div className="container-fluid">
        <ul className="menu-items list-unstyled">
          <li>
            <i className="bi bi-grid-fill"></i>
            {isOpen && <NavLink to="/Home" className="nav-link text-white  dashboard-sidebar">&nbsp;Dashboard</NavLink>}
          </li>
          <li>
            <i className="bi bi-box"></i>
            {isOpen && <> &nbsp; Orders <i className="bi bi-caret-down-fill arrow"></i></>}
          </li>
          <li>
            <i className="bi bi-truck"></i>
            {isOpen && <> &nbsp;Shipments <i className="bi bi-caret-down-fill arrow1"></i></>}
          </li>
          <li>
            <i className="bi bi-shield-fill"></i>
            {isOpen && <NavLink to="/Exception" className="nav-link text-white sidebar-exception" >Execption (NDR)</NavLink>}
          </li>
          <li><i className="bi bi-minecart-loaded"></i>{isOpen && "  Weight Reco"}</li>
          <li><i className="bi bi-receipt"></i>{isOpen && "  Billing"}</li>
          <li><i className="bi bi-clipboard2-fill"></i>{isOpen && "  Reports"}</li>
          <li><i className="bi bi-cart-fill"></i>{isOpen && "  Abandoned"}</li>
          <li><i className="bi bi-file-earmark-excel-fill"></i>{isOpen && "  Addons"}</li>
          <li><i className="bi bi-gear-fill"></i>{isOpen && "  Settings"}</li>
          <li><i className="bi bi-person-raised-hand"></i>{isOpen && <>  Supports <i className="bi bi-caret-down-fill arrow2"></i></>}</li>
          <li><i className="bi bi-bing"></i>{isOpen && "  Serviceable Pincodes"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
