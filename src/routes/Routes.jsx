import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/roomDetails/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      },
    ]
  },
  {
    path: 'login',
    element:<Login></Login>
  },
  {
    path :'signup',
    element : <SignUp></SignUp>
  }
])
