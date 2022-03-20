import _ from 'lodash'


interface messagesType {
  [key: string]: {
    [key: string]: string | JSX.Element | undefined
  }
}

const arrayToLocale = (obj: object): messagesType => {
  var result = {
    ru: {},
    en: {}
  }

  _.transform(obj,
    (res, value, key) => {
      res.ru[key] = value[0]
      res.en[key] = value[1]
    }, result)

  return result
}


export default arrayToLocale