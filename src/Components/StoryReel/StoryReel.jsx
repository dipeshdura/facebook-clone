import main from '../../Css/Main.module.css';
import {reelCreate,reelData} from './ReelData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  faPlus, 
} from '@fortawesome/free-solid-svg-icons'

function StoryReel() {
  return (
    <>
           <div className={main.story}>
          {reelCreate.map((item,index)=>(
        
          <div className="story-card" key={index}>
            <div className={main.story_img}>
         
              <img src={item.img} alt="profile" className={main.story_create} />
              <div className={main.create_icon_box}>
                <div>
              <FontAwesomeIcon icon={faPlus} className={main.create_icon}/>
                </div>
              </div>
              <div className={main.create_info}>
           
              <div className={main.create_name}>
                <p>{item.name}</p>
              </div>
              </div>
            </div>
          </div>
          )) }
          {reelData.map((item,index)=>(
          <div className="story-card" key={index}>
            <div className={main.story_img}>
              <div className={main.story_circle_icon}>
                <a href={item.img.roundImg}>
                <img src={item.img.roundImg} alt="profile" />
                </a>
              </div>
              <a href={item.img.backImg}>
              <img src={item.img.backImg} alt="profile" />
              </a>
              <div className={main.profile_name}>
                <p>{item.name}</p>
              </div>
            </div>
          </div>
          ))}
          {/* <div className="story-card">
            <div className={main.story_img}>
              <div className={main.story_circle_icon}>
                <a href={dog2}>
                <img src={dog2} alt="profile" />
                </a>
              </div>
              <a href={dog2}>
              <img src={dog2} alt="profile" />
              </a>
              <div className={main.profile_name}>
                <p>Dog 2</p>
              </div>
            </div>
          </div>
          <div className="story-card">
            <div className={main.story_img}>
              <div className={main.story_circle_icon}>
                <a href={cat1}>
                <img src={cat1} alt="profile" />
                </a>
              </div>
              <a href={cat1}>
              <img src={cat1} alt="profile" />
              </a>
              <div className={main.profile_name}>
                <p>Cat 1</p>
              </div>
            </div>
          </div>
          <div className="story-card">
            <div className={main.story_img}>
              <div className={main.story_circle_icon}>
                <a href={rabbit}>
                <img src={rabbit} alt="profile" />
                </a>
              </div>
              <a href={rabbit}>
              <img src={rabbit} alt="profile" />
              </a>
              <div className={main.profile_name}>
                <p>Rabbit</p>
              </div>
            </div>
          </div> */}
        </div>
    </>
  )
}

export default StoryReel