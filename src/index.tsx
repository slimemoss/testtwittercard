import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'
import {P1, P2} from './pages'

const container = document.getElementById('app')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<P1/>} />
        <Route path="/p1" element={<P1/>} />
        <Route path="/p2" element={<P2/>} />
      </Routes>
    </HashRouter>

    <a href="./#/">/</a>
    <a href="./#/p1">/p1</a>
    <a href="./#/p2">/p2</a>
  </>,
)
