import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import {P1, P2} from './pages'

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/react-router-test/" element={<P1/>} />
        <Route path="/react-router-test/p1" element={<P1/>} />
        <Route path="/react-router-test/p2" element={<P2/>} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('app')
)
