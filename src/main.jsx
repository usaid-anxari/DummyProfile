import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Users from './Pages/Users'
import Github, { gitHubUser } from './Pages/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children:[
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path:'/about',
//         element: <About/>
//       },
//       {
//         path:'/contact',
//         element: <Contact/>
//       },
//       {
//        path:'/user/:usersId',
//        element: <Users/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:usersId' element={<Users />} />
      <Route loader={gitHubUser} path='github' element= {<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
