import './rightbar.scss';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <span>Jane Doe</span>
              
            </div>
            <div className="buttons">
              <button>Add friend</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <span>Mickey Doe</span>
            </div>
            <div className="buttons">
              <button>Add friend</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <span>Simone Doe</span>
            </div>
            <div className="buttons">
              <button>Add friend</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>Add friend</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <p>
              <span>Jane Doe</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <p>
              <span>Simone Doe</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <p>
              <span>Mickey Doe</span> Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Simone Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Mickey Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Simone Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Mickey Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Simone Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://demoskop.se/wp-content/uploads/2021/10/user.png" alt="" />
              <div className="online" />
              <span>Mickey Doe</span>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Rightbar;