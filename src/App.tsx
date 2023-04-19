import HeaderNav from 'layouts/HeaderNav/HeaderNav'
import HomePage from 'pages/homePage/homePage'
import ProjectPage from 'pages/projectPage/projectPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Router>
                <HeaderNav />
                <div className='App'>
                    <div className='inner-container'>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/projects' element={<ProjectPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
