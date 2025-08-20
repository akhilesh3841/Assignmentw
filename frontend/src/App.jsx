import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ClaimPoints from './components/ClaimPoints'
import History from './components/History'
import Leaderboard from './components/Leaderboard'

const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/claimpoints/:userid" element={<ClaimPoints />} />
          <Route path="/history/:userid" element={<History />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App