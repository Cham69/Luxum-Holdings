import React from 'react'
import { useState } from 'react';
import { MdApartment, MdOtherHouses, MdLandscape } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Categories = ({sendType}) => {
    const [type, setType] = useState('')

  return (
    <div className='categorySet'>
        <div className='typeSwitcher'>
          <h2>
            <span style={{fontSize:'40px', color:'#214969'}}>Time matters </span>
            Filter quckly the properties 
          </h2>
          <div style={{alignItems:'center'}}>
              <button onClick={()=>{setType('Sale')}} >For sale</button>
              <button onClick={()=>{setType('Rent')}}>For rent</button>
          </div>
        </div>
            <h2 className='propertyType'> {type?`Select the category for #${type}`:''}</h2>
        <div className='catIcons'>
            <Link to="/apartments" onClick={() => sendType(type)}>
                <div className='iconsCards'>
                    <MdApartment color={'#1E4868'} size={40}/> 
                    <span className='iconText'>Apartments</span> 
                </div>
            </Link>
            <Link to="/houses">
                <div className='iconsCards'>
                    <MdOtherHouses color={'#1E4868'} size={40}/> 
                    <span className='iconText'>Houses</span> 
                </div>
            </Link>
            <Link to="/lands">
                <div className='iconsCards'>
                    <MdLandscape color={'#1E4868'} size={40}/> 
                    <span className='iconText'>Lands</span> 
                </div>
            </Link>
            
        </div>
        
    </div>
  )
}

export default Categories