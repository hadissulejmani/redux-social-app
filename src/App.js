import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostsList } from './features/posts/PostsList'
import Navbar from './app/navbar/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/create-post" element={<AddPostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
