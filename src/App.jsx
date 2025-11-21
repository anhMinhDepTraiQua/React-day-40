import './App.css'
import PostsList from './pages/PostsList'
import UsersList from './pages/UsersList'
import Navigation from './layouts/navigation'
import { BrowserRouter , Route, Routes } from 'react-router'
function App() {

  return (
    <BrowserRouter basename="/React-day-40">
      <Navigation />
      <Routes>
        <Route path="/posts" element={<PostsList />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
