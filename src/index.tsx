import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Routes, HashRouter } from 'react-router-dom'
import {P1, P2} from './pages'

ReactDOM.render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/react-router-test/" element={<P1/>} />
        <Route path="/react-router-test/p1" element={<P1/>} />
        <Route path="/react-router-test/p2" element={<P2/>} />
      </Routes>
    </HashRouter>
  </>,
  document.getElementById('app')
)
