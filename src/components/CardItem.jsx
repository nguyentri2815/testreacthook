import React from "react";
import { Link } from "react-router-dom";

export default function CardItem({value}) {
  return (
    <>
      <div className="col-md-4 mb-5 mt-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src="https://placehold.it/300x100"
            alt="fdfdsfsd"
          />
          <div className="card-body">
            <h4 className="card-title">Post {value.id}</h4>
            <p className="card-text">
              {value.title}
            </p>
            <p>Author</p>
            <div className="author d-flex align-items-center">
              <span></span>
              <p className="mb-0 pl-2">{value.user.name}</p>
            </div>
          </div>
          <div className="card-footer">
            <Link to={`/detail/${value.id}`} className="btn btn-primary">
              Read More!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
