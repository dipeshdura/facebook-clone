import navbar from '../Css/Navbar.module.css';
import logo from '../assets/img/logo.png';
import profile from '../assets/img/person.jpg';
import menu from '../assets/img/menu.png';
import { FaFacebookMessenger } from "react-icons/fa";
import { HiMiniBell } from "react-icons/hi2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,
    faUserGroup,
    faTv,
    faStore,
    faGamepad,
    faMagnifyingGlass,
    faPlus, 
    faBars
    
} from '@fortawesome/free-solid-svg-icons'



export default function Navbar(){
    return(
        <>
            <header className={navbar.header}>
        <div className={navbar.header_container}>
        <div className={navbar.left_section}>
            <div className={navbar.logo_icon}>
                <a href="">
                <img src={logo} alt="logo" />
                </a>
            </div>
            <div className={navbar.search_input}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={navbar.search_icon}/>
                <input type="text" placeholder="Search Facebook" />
            </div>
            <div className={navbar.second_menu_box}>
            <li className={navbar.bar_item}>
                    <a href="" className={navbar.navbar_link}>
                    <FontAwesomeIcon icon={faBars} className={navbar._icon}/>
                    </a>
                    <div className={navbar.tooltip}>
                        <span>More</span>
                    </div>
                </li>  
                </div>
        </div>
        <div className={navbar.middle_section}>
         
            <ul className={navbar.ul}>
         
                <li className={navbar.navbar_item}>
                    <a href="" className={(navbar.navbar_link,navbar.active)}>
                    <FontAwesomeIcon icon={faHouse} className={navbar._icon} />
                    </a>
                    <div className={navbar.tooltip}>
                        <span>Home</span>
                    </div>
                </li>
                <li className={navbar.navbar_item}>
                    <a href="" className={navbar.navbar_link}>
                    <FontAwesomeIcon icon={faUserGroup} className={navbar._icon}/>
                    </a>
                    <div className={navbar.tooltip}>
                        <span>Friends</span>
                    </div>
                </li>
                <li className={navbar.navbar_item}>
                    <a href="" className={navbar.navbar_link}>
                    <FontAwesomeIcon icon={faTv} className={navbar._icon}/>
                    </a>
                    <div className={navbar.tooltip}>
                        <span>Video</span>
                    </div>
                </li>
                <li className={navbar.navbar_item}>
                    <a href="" className={navbar.navbar_link}>
                    <FontAwesomeIcon icon={faStore} className={navbar._icon}/>
                    </a>
                    <div className={navbar.tooltip}>
                        <span>Marketplace</span>
                    </div>
                </li>
                <div className={navbar.gamepad_item}>
                <li className={navbar.navbar_item}>
                    <a href="" className={navbar.navbar_link}>
                    <FontAwesomeIcon icon={faGamepad} className={navbar._icon}/>
                    </a>
                    <div className={navbar.tooltip}>
                        <span>Gamepad</span>
                    </div>
                </li>
                </div>
                <div className={navbar.bar_box}>
                <li className={navbar.bar_item}>
                    <a href="" className={navbar.navbar_link}>
                    <FontAwesomeIcon icon={faBars} className={navbar._icon}/>
                    </a>
                    <div className={navbar.tooltip}>
                        <span>More</span>
                    </div>
                </li>
                </div>
                
                </ul>
        </div>
        <div className={navbar.right_section}>
            <div className={navbar.create_icon_box}>
            <div className={navbar.create_icon}>
                <a href="">
                    <FontAwesomeIcon icon={faPlus} className={navbar._icon}/>
                </a>
                    <div className={navbar.tooltip}>
                        <span>Create</span>
                    </div>
            </div>
            </div>
            <div className={navbar.menu_icon_box}>
            <div className={navbar.menu_icon}>
                <a href="">
                <img src={menu} alt="menu" />
                </a>
                <div className={navbar.tooltip}>
                        <span>Menu</span>
                    </div>
            </div>
            </div>
            <div className={navbar.message_icon}>
                <a href="">
                <FaFacebookMessenger style={{  width:'40px',
                    height: '25px'}} />
                </a>
                   <div className={navbar.tooltip}>
                        <span>Messenger</span>
                    </div>
            </div>
            <div className={navbar.notification_icon}>
                <a href="">
                <HiMiniBell style={{ width: '40px',
                height: '25px'}}/>
                </a>
                <div className={navbar.tooltip}>
                    <span>Notification</span>
                </div>
            </div>
            <div className={navbar.profile_icon}>
                <a href="">
                <img src={profile} className={navbar} alt="profile" />
                </a>
                <div className={navbar.tooltip}>
                    <span>Account</span>
                </div>
            </div>
        </div>
        </div>
            </header>
        </>
    )
}