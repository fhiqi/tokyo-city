// Ab.jsx
import React from 'react';

const Ab = ({ scrollY }) => {
    return (
        <div
            style={{
                height: '200vh',  // Konten panjang untuk scroll
                backgroundColor: 'lightblue',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `translateY(${scrollY * 0.3}px)`, // Efek parallax
                transition: 'transform 0.3s ease-out',
            }}
        >
            <h1>Konten Ab</h1>
            <p style={{ marginTop: '50vh', fontSize: '20px', textAlign: 'center' }}>
                Ini adalah konten panjang untuk menguji efek parallax dan pergantian konten. Gulir ke bawah untuk melihat pergantian konten.
            </p>
        </div>
    );
};

export default Ab;
