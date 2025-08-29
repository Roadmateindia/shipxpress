import React from 'react'

const Home = ({ toggleSidebar }) => {
  return (
    < >
    <div className='Home'>
      
    {/* <div className='container-fluid subnavbarr h-screen overflow-y-auto'>
      

    </div> */}

    <div className="container mt-4">
      <div className="d-flex justify-content-between flex-wrap">

        {/* Card 1 */}
        <div
          className="card text-white  bg-success"
          style={{ width: '21%', height: '150px', marginLeft: '10px',marginTop:'-45px' }}
        >
          <div className="card-header">0</div>
          <div className="card-body">
            <h5 className="card-title">Total Shipments</h5>
            <p className="card-text">(Total forward shipments)</p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="card text-white bg-info"
          style={{  width: '21%', height: '150px', marginLeft: '10px',marginTop:'-45px' }}
        >
          <div className="card-header">0 (0%)</div>
          <div className="card-body">
            <h5 className="card-title">Delivered Shipments</h5>
            <p className="card-text">(Total forward delivered orders)</p>
          </div>
    
        </div>

        {/* Card 3 */}
        <div
          className="card text-dark bg-primary"
          style={{  width: '21%', height: '150px', marginLeft: '10px',marginTop:'-45px'}}
        >
          <div className="card-header">₹0</div>
          <div className="card-body">
            <h5 className="card-title">Total Revenue</h5>
            <p className="card-text">(Value of delivered orders)</p>
          </div>
         
        </div>

        {/* Card 4 */}
        <div
          className="card text-white bg-secondary"
          style={{  width: '21%', height: '150px', marginLeft: '10px',marginTop:'-45px' }}
        >
          <div className="card-header">0 (0%)</div>
          <div className="card-body">
            <h5 className="card-title">Total RTO</h5>
            <p className="card-text">(Orders returned to origin)</p>
          </div>
        
        </div>
        
      </div>
    </div>

    {  /*news scroller*/}
    <div className="container news-container">
        <span>
          Please use our updated tracking domain, 'https://odrtrk.live' instead of 'https://oder.live' for all tracking updates.
          
        </span>
        <marquee behavior="" direction="left">  IMPORTANT NOTICE! Bluedart has revised its current price structure as an annual pricing revision. The new prices will come into effect from 1st January 2025 onwards. For more details, contact your sales SPOC/KAM or call us at 07669133030.
</marquee>
    </div>
    {/* courier stautus and courier load */}
    <div className='container-fluid courier'>
      <div class="row ">
        <div className='col-6 '>
          <div className='courierload'>
          <p>Courier Wise Load</p>
          <p>No data to display</p>
          </div>
        </div>
        <div className='col-6 '>
          <div className='courierStatus'>
            <div className='status'>
              <p>Courier Wise Status</p>

            </div>
            {/* for show the categories*/}
            <div className='row groups'>
              <div className='col-2'> 
            <span style={{paddingLeft:" 10px"}}>COURIER</span> 
            </div>
            <div className='col-2'>
            <span>TOTAL</span>
            </div>
            <div className='col-2'>
            <span>UNSHIPPED</span>
            </div>
             <div className='col-2'>
            <span>PENDING PICKUP</span>
            </div>
            <div className='col-2'>
            <span>IN TRANSIT</span>
            </div>
            <div className='col-2'>
            <span>DELIVERED</span> &nbsp;
            <span>RTO</span>
            </div>

            </div>

          </div>

        </div>
      </div>
    </div>

    {/* Top Destinations*/}
    <div className='container-fluid destination'>
     <div className='row'>
      <div className='col-6  '>
        <div className='top-destination'>
        <p>Top Destination</p>
        <p>No data To display</p>
        </div>
      </div>
      {/* payment load */}
      <div className='col-6  '>
        <div className='payment-load'>
        <p>Payment Wise Load</p>
        <span>COD</span> / <span>Prepaid</span> {/*here some update are pending */}
        </div>
      </div>
     </div>
    </div>
    {/* product wise status */}
    <div className=' container-fluid product' >
    <div className='row'>
      <div className='col-12'>
        <div className='productwise-status'>
          <p>Product Wise Status</p>
          <hr />
          <span>PRODUCT NAME</span>
          <span>PRODUCT SKU</span>
          <span>TOTAL SHIPMENT</span>
          <span>NOT SHIPPED</span>
          <span>PENDING PICKUP</span>
          <span>IN TRANSIT</span>
          <span>DELIVERED</span>
          <span>RTO</span>
          <hr />
          <p style={{textAlign:"center"}} > No record found</p>
        </div>
      </div>

    </div>
     
    </div>

 </div>
    </>
  )
}


export default Home
