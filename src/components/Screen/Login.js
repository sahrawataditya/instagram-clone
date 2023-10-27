import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import { Usercontext } from "../../App";

const Login = () => {
  const { state, dispatch } = useContext(Usercontext);
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginUser = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return M.toast({
        html: "Invalid Email",
        classes: "#8e53935 red darken-1",
      });
    }
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
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
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user_name));
          localStorage.setItem("_id", data._id);
          dispatch({ type: "USER", payload: data.user });
          M.toast({
            html: "Sign in Successfully",
            classes: "#81c784 green lighten-",
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="headingLogin">Instagram</h2>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="btn waves-effect blue lighten-2"
          onClick={() => loginUser()}
        >
          Login
        </button>
        <h5>
          Don't have an
          <Link to="/signup">
            <span style={{ color: "rgb(3, 140, 252)" }}> account</span>
          </Link>
        </h5>
      </div>
    </div>
  );
};
export default Login;
