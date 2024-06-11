import right from '../../Css/Right.module.css';
import { adData } from './AdData';
function Sponsored() {
  return (
    <div className={right.sponsored}>
    <h3>Sponsored</h3>
    <div className="sponsored_container">
            {adData.map((item,index)=>(
        <div className={right.sponsored_contain} key={index}>
        <div className={right.sponsored_box}>
            <div className={right.sponsored_img}>
                <img src={item.img} className={right.ad_img} alt={item.img} />
                </div>
            <div className={right.sponsored_desc}>
            <div className={right.sponsored_title}>
                    <p>
                {item.title}
                    </p>
                </div>
                <div className="sponsored_link">
                    <a href="">
                {item.link}
                    </a>
                </div>
            </div>
        </div>
        </div>
        ))}
    </div>
</div>
  )
}

export default Sponsored