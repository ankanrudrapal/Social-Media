import { Instagram, Language, LinkedIn, MailOutlined, MoreVert, Place, Twitter } from "@mui/icons-material";
import "./profile.scss";
import Posts from '../../components/posts/Posts';


const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://instagram.com">
              <Instagram fontSize="small" />
            </a>
            <a href="http://twitter.com">
              <Twitter fontSize="small" />
            </a>
            <a href="http://linkedin.com">
              <LinkedIn fontSize="small" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <Place/>
                <span>India</span>
              </div>
              <div className="item">
                <Language/>
                <span>English</span>
              </div>
            </div>
              <button>Follow</button>
          </div>
          <div className="right">
            <MailOutlined/>
            <MoreVert/>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
