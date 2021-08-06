import SideEl from '../components/side-el'
import '../styles/side.css'
const SideBar = (props) =>{
    let SideElm = props.state.sideBar.sideElements.map(sde => <SideEl name={sde.name} to={sde.to} src={sde.src} sidename={sde.sidename} />)
    return(
        <div className='sidebar'>
            <nav>
                <ol>
                    {SideElm}
                </ol>
            </nav>
            
        </div>
    );
}
export default SideBar