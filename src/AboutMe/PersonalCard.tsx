import './PersonalCard.css'
import React from 'react'

function PersonalCard() {
    return (
        <div className='card'>
            <div>
                <div className='cardHeader'>Hello! I'm Lena</div>
                I am junior software engineer based in St. Petersburg.
                I love code, develop high-quality applications and create something new.
                <br/>
                <br/>
                I study Computer Science and Engineering at ITMO University
                <br/>
                <br/>
                Always open to work on interesting projects,
                <br/>
                so feel free to contact me ʕ ᵔᴥᵔ ʔ
            </div>
            <div>
                <div className='cardSkillsHeader'> My skills:</div>
                <br/>
                <div><span className='cardSkillsName'>Languages: </span>
                     Java, Kotlin, TypeScript, Python, C++, HTML & CSS</div>
                <br/>
                <div><span className='cardSkillsName'>Technologies: </span>
                     Spring, Hibernate, Postgresql, Junit, REST, React</div>
                <br/>
                <div><span className='cardSkillsName'>Other: </span>
                     Git, bash, Linux, Docker</div>
            </div>
        </div>
    )
}

export default PersonalCard
