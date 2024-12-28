import React from 'react'

const Contact = () => {
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
      }}>Contact Page</h1>
       <img src="https://cdn03.jotfor.ms/templates/screenshot/form-templates/contact-form-with-gaming-theme.png?v=4061291153&t=classic" alt="not found"  style={{
      maxWidth: '100%',
      height: '800px',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    }} />
    </div>
  )
}

export default Contact
