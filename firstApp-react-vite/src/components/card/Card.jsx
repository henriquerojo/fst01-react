import { useState } from 'react';
import ButtonFollow from '../ButtonFollow/ButtonFollow.jsx';
import './card.css';

function Card (props) {
    // followState é o valor atual do estado
    // setFollowState é uma função que altera o valor do estado
    const [followState, setFollowState] = useState(false);
    function handleClick(userName)
    {
        console.log("UserName: ", userName);
        setFollowState(!followState);
    }

    return (
        <div className="card">
            <h1>{props.userData.name}</h1>

            <img src={props.userData.imageUrl} alt="" />
            <div className="actions">
                <button type="button" onClick={() => handleClick(props.userData.name)}>
                    <ButtonFollow isFollowing={followState} />
                </button>
            </div>
        </div>
    )
}

export default Card
