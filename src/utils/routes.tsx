import React from 'react'

import Home from '../pages/Home'
import Labs from '../pages/Labs'
import Performances from '../pages/Performances'
import Book from '../pages/Book'
import Perfolectures from '../pages/Perfolectures'
import Videoessays from '../pages/Videoessays'


type Route = {
  to: string
  Comp: any
  exact?: boolean
}


const routes: Route[] = [
  {
    to: "/",
    Comp: <Home />
  },
  {
    to: "/labs",
    Comp: <Labs />
  },
  {
    to: "/performances",
    Comp: <Performances />
  },
  {
    to: "/book",
    Comp: <Book />
  },
  {
    to: "/perfolectures",
    Comp: <Perfolectures />
  },
  {
    to: "/videoessays",
    Comp: <Videoessays />
  },
]


export default routes