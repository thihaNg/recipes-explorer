import { Outlet } from "react-router-dom"
import Drawer from "./drawer/Drawer"
import RecipeList from "./recipe-list/RecipeList"

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