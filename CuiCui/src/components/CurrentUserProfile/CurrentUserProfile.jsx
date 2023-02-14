import React from 'react'
import { useAtomValue } from 'jotai'
import { currentUserAtom } from '../../store/atoms'

export const CurrentUserProfile = () => {

  const currentUser = useAtomValue(currentUserAtom)

  return (
    <>
    { currentUser ? (
      <>
        <p>{currentUser.email}</p>
        <p>{currentUser.id}</p>
      </>
    ) : (
      <p>Chargement ...</p>
    )}
    </>
  )
}