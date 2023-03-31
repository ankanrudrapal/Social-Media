import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {

  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Simone Doe",
      img: "https://images.unsplash.com/photo-1582016609297-053772cc6649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZSUyMGVuam95aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id: 2,
      name: "Jane Doe",
      img: "https://plus.unsplash.com/premium_photo-1664533227454-a228e8766994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY2glMjBvdXR8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 3,
      name: "Simone Doe",
      img: "https://plus.unsplash.com/premium_photo-1664529914664-6ed631621864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlmZXN0eWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id: 4,
      name: "Jane Doe",
      img: "https://images.unsplash.com/photo-1586081189643-f273896480a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0JTIwc3VufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;