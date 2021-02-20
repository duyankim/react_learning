import { connect } from "react-redux";
import { addSubscriber } from "../redux";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div>
      <p>구독자수: {count} </p>
      <button onClick={() => addSubscriber()}>구독</button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count
  };
};

const mapDispatchToProps = {
  addSubscriber
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
