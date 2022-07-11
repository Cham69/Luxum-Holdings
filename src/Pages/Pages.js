import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Apartments from "../components/Apartments"
import Houses from "../components/Houses"
import Lands from "../components/Lands"
import { useState } from "react"

const Pages = () => {
  const [businessType, setbusinessType] = useState('')
const sendType = (type)=>{
  setbusinessType(type)
}

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home type={sendType}/>} />
          <Route path="/apartments" element={<Apartments businessType={businessType} />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/lands" element={<Lands />} />
      </Routes>
        
    </div>
  )
}

export default Pages