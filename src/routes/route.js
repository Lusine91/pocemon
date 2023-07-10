import React from 'react'
import Home from './../pages/Home'
import { Routes, Route } from 'react-router-dom'

const RouteLayout = () => (
  <Routes>
    <Route path='' element={<Home />} />
  </Routes>
)

export default RouteLayout
