import React from 'react'
import { useState, useEffect } from 'react';
import { CreatePostForm } from '../CreatePostForm/CreatePostForm';
import { useAtomValue } from 'jotai'
import { logedAtom } from '../../store/atoms'

export const Posts = () => {

  const [posts, setPosts] = useState(null) 
  const loged = useAtomValue(logedAtom);

  useEffect(() => {
    fetch("http://localhost:1337/api/posts", {
          method: "get",
        })
          .then((response) => response.json())
          .then((response) => {
            setPosts(response.data)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
  },[]);

  return (
    <>
   {loged ? <CreatePostForm /> : "Il faut se connecter pour poster"}
   { 
    posts ? (
      <>
      <h2>Feed :</h2>
      {posts.map( post =>
        <p key={post.id}>{post.attributes.texte}</p>
      )}
      </>
    ) : (
      <p>Chargement ...</p>
    )}
    </>
  )
}
