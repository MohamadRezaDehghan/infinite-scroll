import React from "react";

function Comment({ name, imageUrl, description, date }) {
  return (
    <div className="d-flex align-items-start py-3 border-bottom ">
      <img src={imageUrl} className="rounded-circle" width="50" />

      <div className="pe-3">
        <h6 className="mb-0">{name}</h6>
        <p className="mb-1">{description}</p>
        <span className="fs-ms text-muted">{date}</span>
      </div>
    </div>
  );
}

export default Comment;
