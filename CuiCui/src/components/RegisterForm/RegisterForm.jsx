import { React, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from 'jotai'
import { tokenAtom } from "../../store/atoms";
import { currentUserAtom } from "../../store/atoms";

export const RegisterForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "2",
  });

  const setToken = useSetAtom(tokenAtom);
  const setCurrentUser = useSetAtom(currentUserAtom);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:1337/api/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        Cookies.set("token", response.jwt);
        setToken(response.jwt);
        fetch("http://localhost:1337/api/users/me", {
        method: "get",
        headers: {
          'Authorization': `Bearer ${response.jwt}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          setCurrentUser(response)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        navigate("/")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
    <h2>Inscription</h2>
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="όνομα χρήστη"
        value={formData.username}
        onChange={handleChange}
        />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        />
      <input
        type="password"
        name="password"
        placeholder="парола"
        value={formData.password}
        onChange={handleChange}
        />
      <button type="submit">Validar</button>
    </form>
    </>
  );
};
