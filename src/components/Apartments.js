import { useState } from "react"
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";

const Apartments = ({businessType}) => {
  const [apartments, setApartments] = useState([
    { id : 1,
      title: 'Apartment at Colombo 3',
      description: "This is a property at Colombo 3",
      district: "Colombo",
      category: "Rentals",
      beds: 3,
      baths: 3,
      rental: '120,000',
      image: 'house1'  
    },
    { id : 2,
      title: 'Apartment at Colombo 4',
      description: "This is a property at Colombo 4",
      district: "Colombo",
      category: "Rentals",
      beds: 5,
      baths: 3,
      rental: '150,000',
      image: 'house2' 
    },
    { id : 3,
      title: 'Apartment at Rajagiriya',
      description: "This is a property at Rajagiriya",
      district: "Colombo",
      category: "Rentals",
      beds: 4,
      baths: 4,
      rental: '100,000',
      image: 'house3' 
    },
    { id : 4,
      title: 'Apartment at Unawatuna beach premises',
      description: "This is a property at Unawatuna Galle beach premises",
      district: "Galle",
      category: "Rentals",
      beds: 5,
      baths: 5,
      rental: '160,000',
      image: 'house4' 
    },
      { id : 5,
        title: 'Apartment at Negombo',
        description: "This is a property at Negambo",
        district: "Gampaha",
        category: "Rentals",
        beds: 5,
        baths: 3,
        rental: '100,000',
        image: 'house5' 
      }
  ])

    console.log(businessType)
  return (
    <div className="cardSet">
      {
        apartments.map(apartment => {
          return (
            <div key={apartment.id} className="card" >
              <img src={house3} className= "apartmentImage" alt="House" />
              <p style={{marginTop:'1rem', minHeight:'50px'}}>{apartment.title}</p>
              <div className="cardText">
                <p style={{color:'#1E586B', fontSize: '14px', fontWeight:'500'}}>Beds: {apartment.beds}</p>
                <p style={{color:'#1E586B', fontSize: '14px', fontWeight:'500'}}>Baths: {apartment.baths}</p>
              </div>
              <p style={{color:'#767676', fontSize: '14px', fontWeight:'500', marginTop:'10px'}}>{apartment.district}</p>
              <p style={{color:'#767676', fontSize: '14px', fontWeight:'500'}}>Category: {apartment.category}</p>
              <p style={{color:'#008537', fontSize: '1.4rem', fontWeight:'700', marginTop:'10px'}}>Rs {apartment.rental}</p>
            </div>
            );
        })
      }
    </div>
  )
}

export default Apartments