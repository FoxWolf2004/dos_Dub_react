const TeamMember = (name,avatar,bio) => {
    return(
        <div className="teamMember">
            <div className="teamMemberInfo">
                <img src={avatar} alt="аватарка участника озвучки" />
                <h3>{name}</h3>
                <p>{bio}</p>
            </div>

        </div>
    )
}

export default TeamMember