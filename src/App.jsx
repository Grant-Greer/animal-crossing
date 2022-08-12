import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import FossilList from './pages/FossilList'
import BugList from './pages/BugList'
import FishList from './pages/FishList'


function App() {
    return (
        <div className="h-screen bg-[url('./animal-crossing-grassnground.jpeg')] ] font-FinkHeavy">
            <Header />
            <Routes>
                <Route path="/fossils" element={<FossilList />} />
                <Route path="/bugs" element={<BugList />} />
                <Route path="/fish" element={<FishList />} />
            </Routes>
        </div>
    )
}

export default App
