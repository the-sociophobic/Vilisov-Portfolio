import { instanceOf } from 'prop-types'


type StateType = {
  locale: string,
}

const initialState = {
  locale: "rus",
}

export type {
  StateType,
}
export {
  initialState,
}
