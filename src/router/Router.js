import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../components/login'
import ProtectedRoute from '../components/ProtectedRoute'
import Mainpage from '../components/Mainpage'
import App from '../App'
import Chart from '../components/Chart'
import Setting from '../components/Setting'
const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='/' element = {<ProtectedRoute />}>
              <Route path='/' element={<App/>}>
                  <Route index element={<Mainpage/>}/>
                  <Route path='chart' element={<Chart/>}/>
                  <Route path='setting' element={<Setting/>}/>
                  {/* <Route path='upgrade' element={<Upgradeplan/>}/> */}
                  {/* <Route path='report' element={<Reports/>}/>
                  <Route path='setting' element={<Setting/>}/> */}
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
