import React from 'react'
import './App.css'
import Logo from './assets/roadmate logo.png'
import { NavLink } from  'react-router-dom'

const Sidebar = ({ isOpen })  => {
  return (
    <div className='sidebar-background '>
      <div className='row roadmate-logo'>
      
      
      {/* Logo */}
    
        <img
          src={Logo}
          alt="Logo"
          // className="roadmate-logo"
        />
        </div>
   

      {/* Menu Items */}
      <div className='container-fluid'>
      <ul className=" menu-items list-unstyled">
        <li className="">
        <i class="bi bi-grid-fill"></i>  
        <NavLink to="/Home">&nbsp;Dashboard</NavLink>
        </li>
        <li className="">
          <i class="bi bi-box"></i> &nbsp; Orders <i class="bi bi-caret-down-fill arrow"></i>
        </li>
        <li className="">
         <i class="bi bi-truck"></i> &nbsp;Shipments  <i class="bi bi-caret-down-fill arrow1"></i>
        </li>
        <li> <i class="bi bi-shield-fill"></i> <NavLink to="/Exception" className="nav-link text-white">Execption (NDR) </NavLink> </li>
        <li><i class="bi bi-minecart-loaded"></i> &nbsp;Weight Reco</li>
         <li> <i class="bi bi-receipt"></i> &nbsp;Billing</li>
        <li> <i class="bi bi-clipboard2-fill"></i> &nbsp;Reports</li>
         <li> <i class="bi bi-cart-fill"></i> &nbsp;Abandoned</li>
        <li> <i class="bi bi-file-earmark-excel-fill"></i> &nbsp;Addons</li>
         <li> <i class="bi bi-gear-fill"></i> &nbsp;Settings</li>
        <li> <i class="bi bi-person-raised-hand"></i> &nbsp;Supports  <i class="bi bi-caret-down-fill arrow2"></i></li>
         <li> <i class="bi bi-bing"></i> &nbsp;  Serviceable Pincodes</li>
      
        </ul>
        </div>
        </div>
      

  )
}

export default Sidebar
