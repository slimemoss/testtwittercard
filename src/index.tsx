import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Routes, HashRouter } from 'react-router-dom'
import {P1, P2} from './pages'

ReactDOM.render(
  <>
    nyaa
    <HashRouter>
      <Routes>
        <Route path="/" element={<P1/>} />
        <Route path="/p1" element={<P1/>} />
        <Route path="/p2" element={<P2/>} />
      </Routes>
    </HashRouter>
  </>,
  document.getElementById('app')
)
