import React from 'react'

const Navbar = ({ toggleSidebar }) => {
  return (
  
      <div className='topbar'>
    <nav className='navbar navbar-expand-lg '>
    
        {/* toggle button */}
        <i
        class="bi bi-list togglebtn" 
         onClick={toggleSidebar} // Toggle sidebar on click
         ></i>

           {/* shipment button and search bar  */}
       <div className='shipment-box btn-group'>
        <button className='btn '> <p>Shipment <i className="bi bi-caret-down-fill"></i></p> </button>
        <input type="text" placeholder='search AWB Number(s)' />
  
        </div>
      
       <button className='search-box '>
            <i className="bi bi-search"></i>
        </button>

        {/* reacharge box  */}
       <div className="btn-group rechargebox" >
        <div className='rechargebutton'>
  <button className="btn ">
    <i className="bi bi-lightning-charge-fill"></i> Recharge
  </button>
  </div>
  <button className="btn ">
    Balance ₹ 2964.3
  </button>
  
</div>


        <div className='whatsapp-redirect'><i class="bi bi-grid-3x3-gap-fill"></i></div>
       {/* <button className='shipment'>Shipment  <i className="bi bi-caret-down-fill"></i></button>

       <input type="search" placeholder='search AWB Number(s)'  /> <i className="bi bi-search"> </i>
        <input/>
       <div className='rechargebox'>
        <i className="bi bi-lightning-charge-fill" > Recharge </i> 78778

        <i class="bi bi-grid-3x3-gap" style={{ color: 'black', padding: '30px',  fontSize: '30px' }}></i>
        
        
      
      </div> */}
    </nav>
    </div>
  
  )
}

export default Navbar
