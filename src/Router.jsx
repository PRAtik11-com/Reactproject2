import React from 'react'
import { Routes , Route} from 'react-router'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import PageNotfoound from './Component/PageNotfoound'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<PageNotfoound />}></Route>
      </Routes>
    </div>
  )
}

export default Router
