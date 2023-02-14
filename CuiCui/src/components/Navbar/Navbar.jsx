import React from 'react'
import { Link } from 'react-router-dom'
import { DisconnectButton } from '../DisconnectButton/DisconnectButton'
import { useAtomValue } from 'jotai'
import { logedAtom } from '../../store/atoms'

export const Navbar = () => {

  const loged = useAtomValue(logedAtom);

  return (
    <nav>
      <Link to='/'>Accueil</Link><br /><br />
      {!!loged ? (
        <>
          <Link to='/profile'>Profil</Link><br /><br />
          <DisconnectButton /><br /><br />
        </>
        ) : (
        <>
          <Link to='/login'>Connexion</Link><br /><br />
          <Link to='/register'>Inscription</Link><br /><br />
        </>
      )
      }
    </nav>
  )
}
