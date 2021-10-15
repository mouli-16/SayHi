import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "mesaage"}>
            <div className="messageTop">
                <img src="/assets/profile/1.jpg" alt="" className="messageImg" />
                <p className="messageText">Heloo</p>
            </div>
            <div className="messageBottom">1 Hour ago</div>
        </div>
    )
}
