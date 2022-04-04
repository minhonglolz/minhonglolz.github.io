import { useState } from 'react'

export interface Actions {
  setTrue: () => void,
  setFalse: () => void,
}

export default function useBoolean (defaultValue = false): [boolean, Actions] {
  const [state, setState] = useState(defaultValue)
  const setTrue = () => setState(true)
  const setFalse = () => setState(false)
  return [state, { setTrue, setFalse }]
}
