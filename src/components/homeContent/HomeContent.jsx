import "./homeContent.css";
import image from "../../assets/images/Image.png";

const HomeContent = () => {
  return (
    <div className="contentContainer">
      <div className="left">
        <div className="heading">
          <h1>Connecting Devs with Employers</h1>
        </div>
        <div className="desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat.
        </div>
      </div>
      <div className="right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HomeContent;
