import { useState } from 'react'

type Props = {
  state: boolean,
  toggle: () => void,
}

export default function useToggle (defaultValue = false): Props {
  const [state, setState] = useState(defaultValue)
  const toggle = () => setState(!state)

  return {
    state,
    toggle,
  }
};
