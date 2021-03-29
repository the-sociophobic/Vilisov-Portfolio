import React from 'react'

import defaultMessages from './defaultMessages'
import arrayToLocale from './arrayToLocale'
import flatten from '../../../utils/flatten'


const messages = arrayToLocale(flatten(defaultMessages))

type objWithContextType = {
  context: {
    messages: any,
    locale: string
  }
}

const getMessage = (
  _this: objWithContextType,
  id: string,
  onlyString?: boolean
): string | JSX.Element => {
  const res = messages[_this.context.locale][id] || "#no message found#"

  if (onlyString)
    return typeof res === 'string' ? res : '#not string#'
  return res
}
    

const getMessageAllLocales = (
  _this: objWithContextType,
  id: string,
): (string | JSX.Element)[] =>
    [
      messages["rus"][id] || "#no message found#",
      messages["eng"][id] || "#no message found#"
    ]


export {
  messages,
  getMessage,
  getMessageAllLocales,
}