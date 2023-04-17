import React, { useEffect, useState } from "react";
import "./About.css"; // Import custom CSS for styling

const About = () => {
  const [dummyData, setDummyData] = useState([]);

  const getDummyData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    setDummyData(res);
  };

  useEffect(() => {
    getDummyData();
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-description">
        {dummyData.map((value) => {
          return (
            <div key={value.id}>
              <h1>
                {" "}
                Ques :{value.id} {value.title}
              </h1>
              <h3>Ans : {value.body}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
