import "../styles/messages.css"
import Dialog from "./dialog"
const Messages = () => {
    return(
        <div className="dialogs">
            <div className="search-dial">
                <input placeholder='Search'/>
            </div>
            <ul className='_dialogs'>
                <Dialog name='alex' />
                <Dialog name='name'/>
                <Dialog name='name'/>
                <Dialog name='name'/>
            </ul>
        </div>
    );
}
export default Messages 