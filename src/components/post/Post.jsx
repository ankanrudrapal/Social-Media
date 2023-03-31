import {
  ChatBubbleOutlineOutlined,
  CloseOutlined,
  MoreHoriz,
  ShareOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import "./post.scss";


const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">5 mins ago</span>
            </div>
          </div>
          <div className="icon">
            <MoreHoriz />
            <CloseOutlined />
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="bottom">
          <div className="item">
            {liked ? <ThumbUp /> : <ThumbUpOutlined />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatBubbleOutlineOutlined />2 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
