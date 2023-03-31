import './leftbar.scss';
import Friends from '../../assets/friend.png'
import Groups from '../../assets/groups.png'
import Market from '../../assets/market.png'
import Watch from '../../assets/watch.png'
import Memories from '../../assets/memories.png'
import Events from '../../assets/events.png'
import Gaming from '../../assets/game.png'
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/video.png";
import Messages from "../../assets/message.png";
import Tutorials from "../../assets/tutorial.png";
import Courses from "../../assets/course.png";
import Fund from "../../assets/fund.png";
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';


const Leftbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <h4>{currentUser.name}</h4>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <h4>Friends</h4>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <h4>Groups</h4>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <h4>Marketplace</h4>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <h4>Watch</h4>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <h4>Memories</h4>
        </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <h4>Events</h4>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <h4>Gaming</h4>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <h4>Gallery</h4>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <h4>Videos</h4>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <h4>Messages</h4>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <h4>Fundraiser</h4>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <h4>Tutorials</h4>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <h4>Courses</h4>
          </div>
          <div className='sec'>
              Privacy · Terms · Advertising · Ad choices <img src="https://www.boattrader.com/static/img/icons/enhance-notice.svg" alt="" /> · Cookies · More · Ankan &copy; 2023
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Leftbar;