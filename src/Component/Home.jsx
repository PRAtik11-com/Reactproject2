import React from 'react'

const Home = () => {
  return (
    <div tyle={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
       <h1 tyle={{
        fontSize: '3rem',
        color: '#343a40',
        marginBottom: '20px',
        textTransform: 'uppercase'
      }}>Home Page</h1>
       <img src="https://cdn.dribbble.com/users/6638916/screenshots/17655548/media/b916d670edb7a6060ea123876c0cd7d3.png?resize=400x0" alt="not found"  style={{
      maxWidth: '100%',
      height: '800px',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    }} />
    </div>
  )
}

export default Home
