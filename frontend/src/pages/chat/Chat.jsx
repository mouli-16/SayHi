
import Conversation from "../../components/conversation/Conversation"
import Message from "../../components/message/Message"
import Navbar from "../../components/navbar/navbar"
import "./chat.css"

export default function chat() {
    return (
        <>
        <Navbar/>
        <div className="chat">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                   <input placeholder="Search For Friends" className="chatMenuInput" />
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                </div>
            </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message/>
                    <Message own={true}/>
                    <Message own={true}/>
                    <Message/>
                </div>
                <div className="chatBoxBottom">
                    <textarea placeholder="Say Hi..." className="chatMessageInput"></textarea>
                    <button className="chatSend">Send</button>
                </div>
            </div>
        </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                <ul className="rightbarFriendList">
                    {/* {User.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))} */}
                    <li className="rightbarFriend">
                        <div className="rightbarImgContainer">
                            <img src="/assets/profile/1.jpg" alt="" className="rightbarImg" />
                            <span className="online"></span>
                        </div>
                        <span className="Username">John Carter</span>
                    </li>
                    
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}
