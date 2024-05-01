function ButtonFollow(props)
{
    return (
        <span>{ props.isFollowing ? 'Seguindo' : 'Seguir' }</span>
    )
}

export default ButtonFollow;
