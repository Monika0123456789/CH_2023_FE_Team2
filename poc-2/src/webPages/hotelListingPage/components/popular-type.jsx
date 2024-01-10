import React from 'react'

export default function PopularType() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',width:'300px' }}>
    <h2 style={{marginTop:0}}>Popular Type</h2>
    <div>
      <label>
        <input type="checkbox"/>
       Free Breakfast Included
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox"/>
        Pay At Hotel Available
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox"/>
        Free Cancellation Available
      </label>
    </div>
  </div>
  )
}
