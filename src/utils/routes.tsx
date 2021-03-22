import React from 'react'

import Header from '../components/Header'
// import Home from '../pages/Home'
import Labs from '../pages/Labs'
import Performances from '../pages/Performances'
import Book from '../pages/Book'
import Podcast from '../pages/Podcast'
import Perfolectures from '../pages/Perfolectures'
import Videoessays from '../pages/Videoessays'


type Route = {
  to: string
  Comp: any
  exact?: boolean
  id?: string
}


const routes: Route[] = [
  {
    to: "/",
    Comp: <Header />
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
    to: "/podcast",
    Comp: <Podcast />
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