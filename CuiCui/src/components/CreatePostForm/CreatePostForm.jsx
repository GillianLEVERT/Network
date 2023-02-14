import { React, useState } from "react";
import { useAtomValue } from "jotai";
import { currentUserAtom, tokenAtom } from "../../store/atoms";

export const CreatePostForm = () => {
  const currentUser = useAtomValue(currentUserAtom);
  const token = useAtomValue(tokenAtom);

  console.log(currentUser);

  const [formData, setFormData] = useState({
    texte: "",
    user: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:1337/api/posts", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {currentUser ? (
        <>
          <h2>Créer un post</h2>
          <p>{currentUser.id}</p>
          <form action="" onSubmit={handleSubmit}>
            <textarea
              name="texte"
              placeholder="Votre Tweet"
              value={formData.texte}
              onChange={handleChange}
            />
            <button type="submit">Publier</button>
          </form>
        </>
      ) : (
        <p>Chargement ...</p>
      )}
    </>
  );
};
