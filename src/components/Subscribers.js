import { connect } from "react-redux";
import { addSubscriber } from "../redux/subscribers/actions";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <p>구독자수: {count} </p>
      <button onClick={() => addSubscriber()}>구독</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {
  addSubscriber
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
