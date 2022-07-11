import React from 'react'
import { useState } from 'react';
import { MdApartment, MdOtherHouses, MdLandscape } from 'react-icons/md';

const Categories = () => {
    const [type, setType] = useState('')

    const saleType = () =>{
        setType('Sale');
        console.log(type)
    }
    const rentType = ()=>{
        setType('Rent');
        console.log(type)
    }

  return (
    <div className='categorySet'>
        <div className='typeSwitcher'>
          <h2>
            <span style={{fontSize:'40px', color:'#214969'}}>Time matters </span>
            Filter quckly the properties 
          </h2>
          <div style={{alignItems:'center'}}>
              <button onClick={saleType} >For sale</button>
              <button onClick={rentType}>For rent</button>
          </div>
        </div>
            <h2 className='propertyType'> {type?`Select the category for #${type}`:''}</h2>
        <div className='catIcons'>
            <div className='iconsCards'>
                <MdApartment color={'#1E4868'} size={40}/>
            </div>
            <div className='iconsCards'>
                <MdOtherHouses color={'#1E4868'} size={40}/>
            </div>
            <div className='iconsCards'>
                <MdLandscape color={'#1E4868'} size={40}/>
            </div>
        </div>
        
    </div>
  )
}

export default Categories