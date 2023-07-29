'use client';
import React from 'react'
import  './style.css';

export default function index({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className="project">
            <h2>{title}</h2>
            <p>Software Engineer</p>
        </div>
    )
}
