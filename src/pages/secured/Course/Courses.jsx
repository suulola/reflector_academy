import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "../../../components/VideoCard/VideoCard";
import Footer from "../../../Layouts/Footer/Footer";
import "./Courses.scss";

const allCourse = [
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
  {
    description: "",
    link: "",
  },
];
// const myCourses = [
//     {
//         description: "",
//         link: ""
//     },
//     {
//         description: "",
//         link: ""
//     },
//     {
//         description: "",
//         link: ""
//     },
//     {
//         description: "",
//         link: ""
//     },
// ];

const Courses = ({location}) => {

    // const [currentPath, setcurrentPath] = useState(initialState)

  return (
    <div>
      <div style={styles.top}>
        <div className="d-flex justify-content-center align-items-center bg-grey h-10"></div>
        <div>
          <div className="floating_profile_info_container">
            <div className="card floating_profile_card">
              <img
                className="user_img"
                src="/images/user1.svg"
                alt={"user img"}
              />
              <img
                src="/images/stars.svg"
                alt="5 star rating"
                className="my-2"
              />
              <h5 className="text-center">"TUNDE</h5>
              <small className="text-center" >Personal Development Advocate</small>
              <p className="text-center mt-3">Edit Profile</p>
              <p className="text-center">Sign Out</p>
              <p className="text-center">Delete Account</p>
            </div>
            <div className="links">
              <Link to="/courses" className={`ml-2 px-3 font-weight-bold ${location.pathname === "/courses" ? 'bg-white' : 'transparent'}` }  href="/">
                My Courses
              </Link>
              <Link to="/library" className={`px-3 font-weight-bold ${location.pathname === "/library" ? 'bg-white' : 'transparent'}` } href="/">
                Browse our library
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bottom_container row px-2">
        {allCourse.map((item, i) => (
          <div key={i} className="col-12 col-md-4 d-flex">
            <VideoCard 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            donec lectus dictum amet posuere"
            showCard={i === 0 ? false : true} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  top: {
    backgroundImage: "url('/images/high_rise_building.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
  },
};

export default Courses;
