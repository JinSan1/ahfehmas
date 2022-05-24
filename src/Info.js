import React from 'react';

export default function About() {
    return (
        <div className="info">
            <img src="./images/laura.png" className="laura" />
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <h4>laura.website</h4>
            <div className="btn">
            <a href="mailto:mahegael1@gmail.com" className="btn-light"><img src="./images/Mail.png" />Email</a>
            <a href="https://www.linkedin.com/" className="btn-dark"><img src="./images/linkedin.png" />Linkedin</a>
            </div>
        </div>
    )
}