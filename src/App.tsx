import React from 'react';
import './App.css';
import Drawer from './components/drawer/Drawer';
import RecipeItem from './components/recipe-item/RecipeItem';
import RecipeList from './components/recipe-list/RecipeList';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RecipeExplorer from './components/routes/recipe-explorer/RecipesExplorer';
import RecipeByCategory from './components/routes/recipe-by-category/RecipeByCategory';
import RecipeByArea from './components/routes/recipe-by-area/RecipeByArea';
import RecipeDetail from './components/routes/recipe-detail/RecipeDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<RecipeExplorer />} />
          <Route path='/category/:name' element={<RecipeByCategory />} />
          <Route path='/area/:name' element={<RecipeByArea />} />
        </Route>
        <Route path='/recipe/:recipeId' element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  )

  // return (
  //   <div className="App">
  //     <Drawer />
  //     <div
  //       className='content-container'>
  //       <div
  //         className='content'>
  //         <Outlet />
  //         {/* <RecipeList
  //           recipes={mockRecipes} /> */}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
