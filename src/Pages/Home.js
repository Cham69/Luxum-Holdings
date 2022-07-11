import Apartments from "../components/Apartments"
import Houses from "../components/Houses"
import styled from "styled-components"
import house from "../assets/house1.jpg"
import Categories from "../components/Categories"

const Home = ({type}) => {
  return (
    <div>
        <div className="overTheFold">
          <div>
            <h1 className="mainTopic">
              Where the <br />legacy Resides
            </h1>
            
          </div>
          <div>
            <img src={house} alt="House" style={{width:'100%', height:'100%', maxWidth:'auto',maxHeight:'auto'}} />
          </div>
        </div>
        <Categories sendType={type}/>
        {/* <Apartments /> */}
        {/* <Houses /> */}
    </div>
  )
}

export default Home