
import './App.css'
import Infocard from './componets/infocard/infocard'
import Usercard from './componets/usercard/Usercard'

function App() {
  return (
    <div className="body">

      <div className="container">
        <h1>User card</h1>
        <div className="ota">
          <Usercard ism="Emily Johnson" kasbi="Product Manager" bolim="product Devolment" />
          <Usercard ism="Arjun Patel" kasbi="Software Engineer" bolim=" Technology" />
          <Usercard ism="Carlos Hernández" kasbi="UI Designer" bolim="Design" />
          <Usercard ism="Amina Idris" kasbi="" bolim="Marketing Specialist" />
          <Usercard ism=" Takumi Sato" kasbi="HR Specialist" bolim="product Devolment" />
          <Usercard ism=" Chen Wei" kasbi=" Data Analyst" bolim="Data Science" />
          <Usercard ism="Emma Dubois" kasbi="Sales Manager  " bolim=" sales" />
          <Usercard ism="Igor Sokolov" kasbi="Quality Assurance " bolim=" Quality Control" />
        </div>
           <h1 className='infoo'>Info card</h1>
        <div className="info">
       
      <Infocard of="Unraveling the Mysteries of the Ocean"  from="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " Read="read now"></Infocard>
      <Infocard of="Unraveling the Mysteries of the Ocean"  from="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " Read="read now"></Infocard>
      <Infocard of="Unraveling the Mysteries of the Ocean"  from="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " Read="read now"></Infocard>
      <Infocard of="Unraveling the Mysteries of the Ocean"  from="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. " Read="read now"></Infocard>
     

        </div>
      </div>
    </div>
  )
}

export default App
