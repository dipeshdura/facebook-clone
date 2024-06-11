
// data
import right from '../../Css/Right.module.css';

import {data} from './RightData';

// search
import { TbSearch } from "react-icons/tb";
// three dot
import { BsThreeDots } from "react-icons/bs";

// Sponsored
import Sponsored from '../Sponsored/Sponsored';








function Rightbox() {
 

  return (
    <div className={right.right}>
        <div className={right.right_side_bar}>
          <Sponsored/>
            <hr className={right.right_hr} />
            <div className={right.contact_details}>
                <div className={right.contact_head}>
                <div className={right.contact_text}>
                    <h3>
                        Contacts
                        </h3>
                    </div>
                <div className={right.contact_head_list}>
                    <div className={right.search_icon_contain}>
                        <span className={right.search_icon}>
                            <TbSearch className={right.icon_search} />
                        </span>
                    </div>
                    <div className={right.dot_icon_contain}>
                        <span className={right.dot_icon}>
                            <BsThreeDots className={right.dot_icon}/>
                        </span>
                    </div>
                </div>
                </div>
                <div className="contact_list_contain">
                    <div className={right.contact_list}>
                       <ul>
                        { data.map((item,index)=>(
                        <li key={index} className={right.contact_item}>
                    <a href="" className={right.contact_link}>
                        <div className={right.contact_img}>
                            <img src={item.img} alt={item.img} />
                            {item.status &&(

                                <div className={right.status_active}>
                            </div>
                                    )
                            }
                        </div>
                <span className={right.contact_name}>
                    {item.name}   
                    </span>
                    </a>
                    </li>
                ))}
                       </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
  )
}

export default Rightbox