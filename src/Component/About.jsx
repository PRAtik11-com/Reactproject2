import React from 'react'

const About = () => {
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
      }}>About Page</h1>
       <img src="https://s3-alpha.figma.com/hub/file/4051714049/73414d89-b741-485a-b6f4-fa5e8e2effa8-cover.png" alt="not found"  style={{
      maxWidth: '100%',
      height: '800px',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    }} />
    </div>
  )
}

export default About