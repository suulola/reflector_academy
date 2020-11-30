import React from "react";
import VideoCard from "../../../components/VideoCard/VideoCard";
import Footer from "../../../Layouts/Footer/Footer";
// import PropTypes from 'prop-types'

import './VideoResources.scss';
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

const VideoResource = () => {
  return (
    <>
      <div className="bg-grey p-0 px-md-3">
        <h4 className="text-reflector text-center pt-4">Video Resources</h4>
        <div className="w-100 d-flex justify-content-center">
        <VideoCard 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
        donec lectus dictum amet posuere ut."
        otherClass="w-100 px-md-5 mx-md-5" showCard={true} />
        </div>
        <div className="w-100 row px-0 px-md-2">
          {allCourse.map((item, i) => (
            <div key={i} className="col-12 col-md-4 d-flex px-0">
              <VideoCard 
              height={150}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherClass="sm_vid_card mb-3 mx-0 mx-md-3" showCard={true} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

// VideoResource.propTypes = {

// }

export default VideoResource;
