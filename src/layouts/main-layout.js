import React from 'react'
import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      {children}
      
      <Footer />
    </div>
  )
}
