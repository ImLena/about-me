import './PersonalCard.css'
import React from 'react'

function PersonalCard() {
    return (
        <div className='card'>
            <div>
                <div className='cardHeader'>Hello! I'm Lena</div>
                I am junior web developer based in St. Petersburg.
                I love code, modern user-friendly interfaces and develop high-quality applications.
                <br/>
                <br/>
                I study Computer Science and Engineering at ITMO University
            </div>
            <div>
                <div className='cardSkillsHeader'> My skills:</div>
                <div> React & Redux, TypeScript, JavaScript, HTML & CSS, REST, Java, Git</div>
            </div>
        </div>
    )
}

export default PersonalCard
