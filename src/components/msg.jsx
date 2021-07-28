import '../styles/msg.css'
const Msg = () =>{
    return(
        <div className="chat-contain">
            <div className="chat--avatar">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png' alt="" />
            </div>
            <div className="chat--content">
                <div className="chat-author">
                    <span>name</span>
                </div>
                <div className="chat-msg">
                    <span>first message</span>
                </div>
                
            </div>
        </div>
    );
}
export default Msg