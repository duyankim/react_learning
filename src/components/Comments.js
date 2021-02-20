import { connect } from "react-redux";
import { fetchComments } from "../redux";
import React, { useEffect } from "react";

const Comments = ({ fetchComments, loading, comments }) => {
  useEffect(() => {
    fetchComments();
  }, []);

  const commentsItems = loading ? (
    <div>is loading...</div>
  ) : (
    comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );

  return <div>{commentsItems}</div>;
};

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments.item
  };
};

const mapDispatchToProps = {
  fetchComments
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
