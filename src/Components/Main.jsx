import main from '../Css/Main.module.css';
// import profile from '../assets/img/profile.jpg';
// storyReel
import StoryReel from './StoryReel/StoryReel';

import person from '../assets/img/person.jpg'
import snoop from '../assets/img/snoop.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faComment
} from '@fortawesome/free-solid-svg-icons'
// logo
import videologo from '../assets/img/videologo.png';
import photologo from '../assets/img/photologo.png';
import smilelogo from '../assets/img/smilelogo.png';
// menu-icon
import { BsThreeDots } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
// earth
import { FaEarthAmericas } from "react-icons/fa6";
// react
// like
import { AiOutlineLike } from "react-icons/ai";
// comment

// share
import { TbShare3 } from "react-icons/tb";

// leftBox
import Leftbox from './LeftData/Leftbox';

// rightBox
import Rightbox from './RightData/Rightbox';



function Main() {
  return (
    <>
    <div className={main.container_box}>
        <div className={main.left_box}>
          <Leftbox/>
        </div>

        <div className={main.middle_box}>
          <div className={main.story_container}>
     <StoryReel/>
          </div>
          <div className={main.post_container}>
            <div className={main.post}>
              <div className={main.post_details}>
                <div className={main.post_img}>
                  <img src={person} alt="" />
                </div>
                <div className={main.post_topic}>
                  <input type="text" placeholder="What's on your mind, Guest?" readOnly/>
                </div>
              </div>
              <hr className={main.hr_post} />
              <div className={main.post_activity}>
                <div className={main.live_video}>
                  <span>
                  <img src={videologo} alt="videologo" style={{width:'24px',height:'24px'}} />
                  </span>
                  <span className={main.post_texture}>
                  Live video
                  </span>
                </div>
                <div className={main.photo_video}>
                  <span>
                  <img src={photologo} alt="photologo" style={{width:'24px',height:'24px'}} />
                  </span>
                  <span className={main.post_texture}>
                  Photo/video
                  </span>
                </div>
                <div className={main.feeling_activity}>
                  <span>
                  <img src={smilelogo} alt="smilelogo" style={{width:'24px',height:'24px'}} />
                  </span>
                  <span className={main.post_texture}>
                  Feeling/activity
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={main.post_card_container}>
               <div className={main.post_card}>
              <div className="post_card_head_container">
              <div className={main.post_card_head}>
                <div className={main.post_card_details}>
                  <div className={main.post_card_img}>
                  <img src={snoop} alt="" />
                  </div>
                  <div className="post_card_info">
                    <div className={main.post_card_name}>
                      <a href="" className={main.name_link}>
                        Snoop Dog
                        </a>
                        </div>
                    <div className={main.post_time}>
                      <a href="" className={main.time_link}>

                      <p className={main.time}> <span className={main.time_status}>
                      1h
                      </span>
                        &#x1F784; 
                         <span className={main.iconspan}><FaEarthAmericas className={main.earthicon}/></span>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={main.post_card_menu_icon}>
                <div className={main.menu_icon_card}>
                    <BsThreeDots className={main.menu_icon}/>
                    </div>
                  <div className={main.menu_icon_card}>
                    <CgClose className={main.close_icon}/>
                 </div>
                </div>
              </div>
              <div className={main.post_card_status}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, ab.
              </div>
              </div>
              <div className="post_card_middle_container">
                <img src={snoop} alt="" />
              </div>
              <div className={main.post_card_reaction_container}>
              <div className={main.post_card_reaction}>
                <div className="react">1 Like dura</div>
                <div className={main.popularity}>
                  <div className="comment-details">1comment</div>
                  <div className="share-details">1 share</div>
                </div>
              </div>
              <hr className={main.hr} />
                <div className="post_card_react_container">
                <div className={main.post_card_react}>
                <div className={main.like_section}>
                  <div className={main.like_section_box}>
                  <AiOutlineLike className={main.like_icon}/> like
                  </div>
                  </div>
                <div className={main.comment_section}>
                  <div className={main.comment_section_box}>
                  <FontAwesomeIcon icon={faComment} />
                  comment
                  </div>
                  </div>
                <div className={main.share_section}>
                  <div className={main.share_section_box}>
                  <TbShare3 className={main.share_icon}/> Share</div>
                  </div>
                </div>
                <div className="interact_info">
                  <div className="interact-img">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              </div>


            </div>
            <div className={main.post_card}>
              <div className="post_card_head_container">
              <div className={main.post_card_head}>
                <div className={main.post_card_details}>
                  <div className={main.post_card_img}>
                  <img src={person} alt="" />
                  </div>
                  <div className="post_card_info">
                    <div className={main.post_card_name}>
                      <a href="" className={main.name_link}>
                      Dura
                      </a>
                      </div>
                    <div className={main.post_time}>
                      <a href="" className={main.time_link}>
                      <p className={main.time}> <span className={main.time_status}>3 day ago </span>
                        &#x1F784;
                      <span className={main.iconspan}><FaEarthAmericas className={main.earthicon}/></span>
                        </p> 
                      </a>
                    </div>
                  </div>
                </div>
                <div className={main.post_card_menu_icon}>
                  <div className={main.menu_icon_card}>
                    <BsThreeDots className={main.menu_icon}/>
                    </div>
                  <div className={main.menu_icon_card}>
                    <CgClose className={main.close_icon}/>
                 </div>
                </div>
              </div>
              <div className={main.post_card_status}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, ab.
              </div>
              </div>
              <div className="post_card_middle_container">
                <img src={person} alt="" />
              </div>
              <div className={main.post_card_reaction_container}>
              <div className={main.post_card_reaction}>
                <div className="react">1 Like dura</div>
                <div className={main.popularity}>
                  <div className="comment-details">1comment</div>
                  <div className="share-details">1 share</div>
                </div>
              </div>
              <hr className={main.hr} />
                <div className="post_card_react_container">
                <div className={main.post_card_react}>
                <div className={main.like_section}>
                  <div className={main.like_section_box}>
                  <AiOutlineLike className={main.like_icon}/> like
                  </div>
                  </div>
                <div className={main.comment_section}>
                  <div className={main.comment_section_box}>
                  <FontAwesomeIcon icon={faComment} />
                  comment
                  </div>
                  </div>
                <div className={main.share_section}>
                  <div className={main.share_section_box}>
                  <TbShare3 className={main.share_icon}/> Share</div>
                  </div>
                </div>
                <div className="interact_info">
                  <div className="interact-img">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              </div>


            </div>
         
          </div>
        </div>

        <div className={main.right_box}><Rightbox/></div>
    </div>
    </>
  )
}

export default Main