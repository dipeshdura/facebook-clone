import { useState,useEffect } from "react"
import left from '../../Css/Left.module.css';

import {leftData as data} from './LeftData';

// drownarrow
import { FaAngleDown } from "react-icons/fa6";
//uparrow
import { IoChevronUp } from "react-icons/io5";

function Leftbox() {
    const [year, setYear] = useState('');

    useEffect(() => {
        // Set the current year when the component mounts
        setYear(new Date().getFullYear());
    }, []); // Empty dependency array ensures the effect runs only once on mount
// left
    

    return (
        <div className={left.left}>
            <div className={left.left_side_bar}>
                <ul className={left.left_ul}>
                    {data.map((data,index)=>(
                        <li key={index} className={left.left_item}>
                        <a href="" className={left.left_link}>
                            <div className={left.left_profile}>
                            <img src={data.img} alt="" />
                            </div>
                            <span className={left.left_title}>{data.title}</span>
                        </a>
                    </li>
                        ))}
                        {/* see more start */}
                           <li  className={left.left_item}>
                        <a href="" className={left.left_link}>
                            <div className={left.down_icon}>
                            <FaAngleDown className={left.arrow_icon}/>
                            </div>
                            <span className={left.left_title}>See more</span>
                        </a>
                    </li>
                        {/* see more end */}

                  
               
                    <div className="see_more_container">
                        {data.map((data,index)=>(
                            <li key={index} className={left.left_item}>
                        <a href="" className={left.left_link}>
                            <div className={left.left_profile}>
                            <img src={data.img} alt={data.img} />
                            </div>
                            <span className={left.left_title}>
                                {data.title}
                                </span>
                        </a>
                    </li>
                    ))}
                    {/* see less start */}
                    <li className={left.left_item}>
                        <a href="" className={left.left_link}>
                            <div className={left.down_icon}>
                            <IoChevronUp className={left.arrow_icon}/>
                            </div>
                            <span className={left.left_title}>
                                See less
                                </span>
                        </a>
                    </li>
                    {/* see less end */}
                    </div>
                </ul>
                <hr className={left.left_hr} />
                <div className="privacy_terms">
                    <ul className={left.privacy_ul}>
                        <li className={left.term_item}>
                            <a href="" className={left.term_link}>Privacy</a>
                        </li>
                    &#46;
                        <li className={left.term_item}>
                            <a href="" className={left.term_link}>Terms</a>
                        </li>
                    &#46;
                        <li className={left.term_item}>
                            <a href="" className={left.term_link}>Advertising</a>
                        </li>
                    &#46;
                        <li className={left.term_item}>
                            <a href="" className={left.term_link}>Ad Choices</a>
                        </li>
                    &#46;
                        <li className={left.term_item}>
                            <a href="" className={left.term_link}>Cookies</a>
                        </li>
                    &#46;
                  
                        <li className={left.term_item}>
                            <a href="" className={left.more_link}>More</a>
                        </li>
                    &#46;
                    </ul>
                    <span className={left.copyright_link}>
                        Meta &#169; {year}
                    </span>
  
                   
                </div>
            </div>
        </div>
    )
}

export default Leftbox