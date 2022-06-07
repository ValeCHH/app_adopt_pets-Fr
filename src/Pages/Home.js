import React, { useContext } from "react";
import "./Home.css";
import AppContext from "../Context/AppContext";

export const Home = () => {
  const appContext = useContext(AppContext);

  return (
    <div className="home-wrapper">
      <div className="home-left">
      <div id="pop_up">
      <img
          src="./img/wallpaper-picture-010.jpg"
          width="100%"
          alt="Home"
        ></img>

</div>
       
        <div className="welcome">
          {appContext.currentUser
            ? `Nice to see you ${appContext.currentUser.first}!`
            : "Welcome!"}
        </div>
        <div className="intro">
          Appet is the right place to find your next forever partner. In Appet
          we take care of our furry friends in the best way possible. Together
          with the help of our stuff including vets, pet stylers and trainers we
          excel on keeping our promise. Come join us and help us make the world
          better!
        </div>
        <div className="welcome2"> One pet at a time.</div>
      </div>
    </div>
  );
};

export default Home;
