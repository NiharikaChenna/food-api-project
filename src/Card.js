import './App.css'
function Card(props){
    return(
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{props.label}</h3>
                <h4 className='source'>{`source:${props.source}`}</h4>
                <h5 className="weight">{`totalweight:${props.weight}`}</h5>
            </div>
        </div>
    )
}

export default Card;