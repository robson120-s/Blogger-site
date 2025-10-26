import React, { useState } from "react";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
  AiTwotoneMessage,
} from "react-icons/ai";


const Main = () => {
  // ✅ States
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  // ✅ Like handler
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);

      // remove dislike if active
      if (disliked) {
        setDisliked(false);
        setDislikeCount(dislikeCount - 1);
      }
    }
  };

  // ✅ Dislike handler (optional)
  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(dislikeCount - 1);
    } else {
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);

      // remove like if active
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
  };

  return (
    <div>
      <h3 className="p-3 mx-5 mt-4 fw-bold fs-2 d-flex justify-content-center align-item-center ">List of Blogs</h3>
      <div className="d-flex px-5 flex-wrap justify-content-center">
      <div className="card m-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h5 className="card-title">Blog Title</h5>
          <p className="card-text">
            Todays vibe — Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <button className="btn btn-secondary m-3">Read More</button>

          <div className="border-top p-3" style={{ height: "40px" }}>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleLike}
              >
                {liked ? (
                  <AiFillLike size={27} className="text-primary me-1" />
                ) : (
                  <AiOutlineLike size={27} className="me-1" />
                )}
                <span>{likeCount}</span>
              </button>

              <button
                className="border-0 bg-transparent"
                style={{ outline: "none" }}
              >
                <AiTwotoneMessage size={27} />
              </button>

              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleDislike}
              >
                {disliked ? (
                  <AiFillDislike size={27} className="text-danger me-1" />
                ) : (
                  <AiOutlineDislike size={27} className="me-1" />
                )}
                <span>{dislikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card m-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h5 className="card-title">Blog Title</h5>
          <p className="card-text">
            Todays vibe — Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <button className="btn btn-secondary m-3">Read More</button>

          <div className="border-top p-3" style={{ height: "40px" }}>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleLike}
              >
                {liked ? (
                  <AiFillLike size={27} className="text-primary me-1" />
                ) : (
                  <AiOutlineLike size={27} className="me-1" />
                )}
                <span>{likeCount}</span>
              </button>

              <button
                className="border-0 bg-transparent"
                style={{ outline: "none" }}
              >
                <AiTwotoneMessage size={27} />
              </button>

              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleDislike}
              >
                {disliked ? (
                  <AiFillDislike size={27} className="text-danger me-1" />
                ) : (
                  <AiOutlineDislike size={27} className="me-1" />
                )}
                <span>{dislikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
            <div className="card m-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h5 className="card-title">Blog Title</h5>
          <p className="card-text">
            Todays vibe — Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <button className="btn btn-secondary m-3">Read More</button>

          <div className="border-top p-3" style={{ height: "40px" }}>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleLike}
              >
                {liked ? (
                  <AiFillLike size={27} className="text-primary me-1" />
                ) : (
                  <AiOutlineLike size={27} className="me-1" />
                )}
                <span>{likeCount}</span>
              </button>

              <button
                className="border-0 bg-transparent"
                style={{ outline: "none" }}
              >
                <AiTwotoneMessage size={27} />
              </button>

              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleDislike}
              >
                {disliked ? (
                  <AiFillDislike size={27} className="text-danger me-1" />
                ) : (
                  <AiOutlineDislike size={27} className="me-1" />
                )}
                <span>{dislikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
            <div className="card m-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <h5 className="card-title">Blog Title</h5>
          <p className="card-text">
            Todays vibe — Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <button className="btn btn-secondary m-3">Read More</button>

          <div className="border-top p-3" style={{ height: "40px" }}>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleLike}
              >
                {liked ? (
                  <AiFillLike size={27} className="text-primary me-1" />
                ) : (
                  <AiOutlineLike size={27} className="me-1" />
                )}
                <span>{likeCount}</span>
              </button>

              <button
                className="border-0 bg-transparent"
                style={{ outline: "none" }}
              >
                <AiTwotoneMessage size={27} />
              </button>

              <button
                className="border-0 bg-transparent d-flex align-items-center"
                style={{ outline: "none" }}
                onClick={handleDislike}
              >
                {disliked ? (
                  <AiFillDislike size={27} className="text-danger me-1" />
                ) : (
                  <AiOutlineDislike size={27} className="me-1" />
                )}
                <span>{dislikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;