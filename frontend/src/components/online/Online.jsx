import "./online.css"

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
        <div className="rightbarImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarImg" />
            <span className="online"></span>
        </div>
        <span className="Username">{user.username}</span>
    </li>
    )
}
