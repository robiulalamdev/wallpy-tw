import img from "../../assets/images/messages/profile1.png";

const SingleMessage = () => {
  return (
    <>
      <div className="single-msg-container">
        <img src={img} alt="" />
        <div className="single-msg">
          <p>I think WoW reported the most concurrent players this year</p>
        </div>
      </div>
      <div className="single-msg-container mt-4">
        <img src={img} alt="" />
        <div className="single-msg-dark">
          <p>I think WoW reported the most concurrent players this year</p>
        </div>
      </div>
    </>
  );
};

export default SingleMessage;
