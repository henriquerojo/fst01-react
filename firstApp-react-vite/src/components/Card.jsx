import './card.css'

function Card (props) {

    return (
        <div className="card">
            <h1>{props.name}</h1>

            <img src={props.imageUrl} alt="" />

            <button type="button">
                Seguir  
            </button>
        </div>
    )
}

export default Card

