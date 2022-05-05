import React from "react";

const RelatedTags = () => {
  return (
    <>
      {/* tags started */}
      <h4>Related Tags</h4>
      {tags.map((tag) => {
        return (
          <div className="relatedTags d-flex align-items-center my-1">
            <button
              className="btn btn-small mr-1"
              style={{
                color: "white",
                backgroundColor: "#119872",
                fontSize: "10px",
              }}
            >
              {tag.name}
            </button>
            <small className="text muted ">× {tag.num}</small>
          </div>
        );
      })}
      {/* tags Ends */}
    </>
  );
};

export default RelatedTags;

const tags = [
  {
    name: "javascript",
    num: 2313929,
  },
  {
    name: "python",
    num: 1859181,
  },
  {
    name: "java",
    num: 1819276,
  },
  {
    name: "c#",
    num: 1514304,
  },
  {
    name: "php",
    num: 1424186,
  },
  {
    name: "android",
    num: 1360507,
  },
  {
    name: "html",
    num: 1109113,
  },
  {
    name: "jquery",
    num: 1024730,
  },
  {
    name: "c++",
    num: 749131,
  },
  {
    name: "css",
    num: 743718,
  },
];
