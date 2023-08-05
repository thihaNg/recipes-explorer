import { Outlet } from "react-router-dom"
import Drawer from "./drawer/Drawer"

const Layout: React.FC = () => {
  return (
    <div className="App">
      <Drawer />
      <div
        className='content-container'>
        <div
          className='content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout