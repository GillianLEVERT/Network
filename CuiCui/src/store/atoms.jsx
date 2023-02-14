import { atomWithStorage } from 'jotai/utils'

export const tokenAtom = atomWithStorage('token', null)

export const logedAtom = atomWithStorage('loged', (get) => {
  const token = get(tokenAtom)
  if (token !== null) {
    return true
  }
});

export const currentUserAtom = atomWithStorage('currentUser', (null))