import './usercard.css'

function Usercard(props) {

  return (
    <div>
      <div className="usercard">
        <img src="./odam.png" alt="" />
        <h3>{props.ism}</h3>
        <p>{props.kasbi}</p>
        <p>{props.bolim}</p>
      </div>
    </div>
  )
}

export default Usercard
