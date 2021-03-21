import React from "react"


const emojiList: {
  [key: string]: string | undefined
} = {
  fire: '🔥',
  strong: '💪',
  boom: '💥',
  left: '👈',
  right: '👉',
  link: '🔗',
}


const Emoji: React.FunctionComponent<{
  name: string
}> = ({ name }) =>
  <span
    aria-label={name}
    role='img'
  >
    {emojiList[name]}
  </span>


export default Emoji