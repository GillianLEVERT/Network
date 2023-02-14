import React from 'react'
import Cookies from "js-cookie";
import { useSetAtom } from 'jotai'
import { tokenAtom } from "../../store/atoms";

export const DisconnectButton = () => {

  const setToken = useSetAtom(tokenAtom);

  const handleClick= () => {
    Cookies.remove('token');
    setToken(null)
    window.location.reload(false);
  }
  return (
    <button onClick={handleClick}>Deconnexion</button>
  )
}