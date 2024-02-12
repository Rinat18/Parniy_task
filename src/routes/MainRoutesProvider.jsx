import React from 'react'
import HomePage from '../pages/HomePage'
import DetailCards from '../pages/DetailCards'
import AddPage from '../pages/AddPage'
import Payment from '../pages/Payment'
import { Route, Routes } from 'react-router-dom'
import Favorites from '../pages/Favorites'

const MainRoutesProvider = () => {
  const PUBLIC_ROUTES = [
    {id:1, link:"/", element:<HomePage />} ,
    {id:2, link:"/detail/:id", element:<DetailCards />} ,
    {id:3, link:"/add", element:<AddPage />} ,
    {id:4, link:"/payment", element:<Payment />} ,
    {id:5, link:"/favorites", element:<Favorites />} ,
  ]
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.id} path={elem.link} element={elem.element} />
        ))}
      </Routes>
    </>
  )
}

export default MainRoutesProvider
