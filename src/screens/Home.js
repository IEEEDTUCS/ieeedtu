import { AiOutlineForm } from "react-icons/ai";

import ChapterCard from "../components/ChapterCard";
import "../styles/home.css";
const { chapters } = require("../meta/chapters");

const Home = (props) => {
  return (
    <>
      <div className="home">
        <div className="modal">
          <div className="modal-list">
            <div className="modal-text">
              <h1>IEEE DTU</h1>
              <h4>A world of limitless possibilities</h4>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfqmxv8OrP1wmhgNrUtnZSMKzlLI8WmtxibAGmVqqd8YHjgJQ/viewform"
                rel="noreferrer"
                target="_blank"
                className="join-btn"
              >
                <AiOutlineForm />
                <span>Join Us</span>
              </a>
            </div>
            <div className="chapter-list">
              {chapters.map((ele, i) => (
                <ChapterCard
                  name={ele.name}
                  img={ele.img}
                  content={ele.content}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
