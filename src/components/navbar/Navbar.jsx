import {
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  SearchOutlined,
  MessageOutlined,
  WbSunnyOutlined,
  DarkModeOutlined,
  Mic,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>mysocial</span>
        </Link>
          <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggle} />
        ) : (
          <DarkModeOutlined onClick={toggle} />
        )}
        <GridViewOutlined />
      </div>
      <div className="mid">
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search MySocial" />
          <Mic />
        </div>
      </div>
      <div className="right">
        <MessageOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
