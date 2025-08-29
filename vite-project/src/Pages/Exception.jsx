import React from 'react'


const Exception = () => {
  return (
    <>
    <div className='container exception-page'>
      <div className='card ndr-card'>
        <div className='card-header'>{/*card heading */}
          <div className='row'>
            <div className='col-1'>
              <span> <i class="bi bi-app-indicator"></i>&nbsp; NDR
              </span>
              
            </div>
            <div className='col-7'></div>
            <div className='col-4'>
              <button type='button'> <i class="bi bi-arrow-down-circle-fill"></i>Export</button>
              <button type='button'> <i class="bi bi-arrow-up-circle-fill"></i>CSV Update </button>
              <button type='button'> <i class="bi bi-funnel-fill"></i>Filters</button>
              <button><i class="bi bi-question-circle-fill"></i></button>
            </div>
          </div>
         </div>
         <div className='card-body'> {/* main content */}
          <div className='row'>
          <div className='col-2'> <button>All(0)</button></div>
         </div>

         <div className='card-body'> {/* main content */}
          <div className='col-2'> <button>All(0)</button></div>
         </div>

         <div className='card-body'> {/* main content */}
          <div className='col-2'> <button>All(0)</button></div>
         </div>

         <div className='card-body'> {/* main content */}
          <div className='col-2'> <button>All(0)</button></div>
         </div>

         <div className='card-body'> {/* main content */}
          <div className='col-2'> <button>All(0)</button></div>
         </div>
         </div>
        
      </div>
    
    </div>
    </>
  )
}

export default Exception
