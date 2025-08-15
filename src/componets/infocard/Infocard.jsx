import  './infocard.css'

function Infocard(props) {
  return (
    <div>
     <div className="Infocard">
<img src="./dengiz.png" alt="" />
<h3>{props.of}</h3>
<p>{props.from}</p>
<button>{props.Read}</button>
     </div>
    </div>
  )
}

export default Infocard
