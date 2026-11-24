import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import ViewPost from './components/ViewPost'
import EditPost from './components/EditPost'
import App from './App'
import ListPosts from './components/ListPost'

const Router= createBrowserRouter([
    {path:'', element:<App/>},
    {path:'/posts', element: <ListPosts/>},
    { path : 'posts/create' , element : <CreatePost/> },
    { path: 'posts/:postId', element: <ViewPost/>},
    { path : 'posts/:postId/edit', element: <EditPost/>},
    
])
export default Router