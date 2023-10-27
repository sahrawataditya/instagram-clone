import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const navigate = useNavigate();
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setimage] = useState("");
  const [url, seturl] = useState("");

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({
              html: data.error,
              classes: "#e53935 red darken-1",
            });
          } else {
            M.toast({
              html: "Created Post Successfully",
              classes: "#81c784 green lighten-",
            });
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "asq");
    fetch("https://api.cloudinary.com/v1_1/asq/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        seturl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        onChange={(e) => setbody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn waves-effect blue lighten-2">
          <i className="material-icons">add</i>
          <input type="file" onChange={(e) => setimage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect blue lighten-2"
        id="btn-post"
        onClick={() => postDetails()}
      >
        Submit Post
      </button>
    </div>
  );
};
export default Createpost;
