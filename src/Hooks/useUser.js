import { useState } from "react";

import axios from "axios";
import jwt_decode from "jwt-decode";


export default function useUser() {
  const [currentUser, setCurrentUser] = useState();
  const [usersArray, setUsersArray] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    repassword: "",
    phone: "",
    admin: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  var token = "eyJ0eXAiO.../// jwt token";
  const admin = currentUser?.admin;


  function addUser(user) {
    const addedUsersArray = [...usersArray, user];
    setUsersArray(addedUsersArray);
  }
  //put in useEffect

  async function getUser() {
    try {
      if (!token) {
        return;
      }
      const decoded = jwt_decode(token);
      const res = await axios.get(`http://localhost:8000/users/${decoded.id}`);
      setCurrentUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    const res = await axios.post("http://localhost:8000/users/login", user);
    if (res.data.token) {
      setEmail("");
      setPassword("");
      localStorage.setItem("token", JSON.stringify(res.data.token));
      setCurrentUser(res.data.user);
      //navigate("/");
      setIsOpen(false);
    }
  };

  const onSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/users/signup", user);
      if (res.data) {
        addUser({ ...user });
        setUser({
          first: "",
          last: "",
          email: "",
          password: "",
          repassword: "",
          phone: "",
          admin: "",
        });
        //navigate("/");
        alert("Thanks for signing up. Please Log in.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const HandleLogOut = () => {
    localStorage.removeItem("token");
    //navigate("/");
    window.location.reload();
  };

  const handleChangeSignUp = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    admin,
    currentUser,
    getUser,
    addUser,
    onSubmitLogin,
    handleChangeSignUp,
    HandleLogOut,
    onSubmitSignUp,
    modalIsOpen,
    setIsOpen,
    email,
    setEmail,
    password,
    setPassword
  );
}
