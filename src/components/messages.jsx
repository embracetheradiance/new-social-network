import "../styles/messages.css"
import Dialog from "./dialog"
const Messages = (props) => {
    
    let DialogElement = props.state.dialogPage.dialogData.map(dlg => <Dialog name={dlg.name} />)
    
    return(
        <div className="dialogs">
            <div className="search-dial">
                <input placeholder='Search'/>
            </div>
            <ul  className='_dialogs'>
                {DialogElement}
            </ul>
        </div>
    );
}
export default Messages 