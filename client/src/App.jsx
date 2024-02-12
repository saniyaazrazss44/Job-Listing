import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import JobDetailsPage from './components/JobDetails/JobDetailsPage'
import JobPostPage from './components/JobPost/JobPostPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/job-details" element={<JobDetailsPage />} />
        <Route path="/job-post" element={<JobPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
