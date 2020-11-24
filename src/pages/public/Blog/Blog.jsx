import React from "react";
import BlogCard from "../../../components/BlogCard/BlogCard";
import Footer from "../../../Layouts/Footer/Footer";

let allArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Blog = () => {
  return (
    <>
      <div className="bg-grey w-100 p-3">
        <div className="px-5 mx-5">
          <h3 className="text-reflector pl-2 ml-5 pt-3 pb-0 mb-0">Blog</h3>
        </div>
        <div
          className="row justify-content-center"
          style={{ flexWrap: "wrap" }}
        >
          {allArticles.map((item, index) => (
            <BlogCard
              key={index}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi veritatis consectetur est, laboriosam officiis quos sunt laudantium alias dicta molestias nemo beatae"
              id={item}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
