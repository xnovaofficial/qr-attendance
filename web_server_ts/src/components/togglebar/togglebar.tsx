import '../../App.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from './avatar/avatar';

const Togglebar = () => {
  return (
    <div className='navbar'>

<BsThreeDotsVertical size={40} />

<Avatar/>
    

    </div>
  )
}

export default Togglebar