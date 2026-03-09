import { RouterProvider } from 'react-router'
import { routes } from './routes'
import './App.scss'

function App() {

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
