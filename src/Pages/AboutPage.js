import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServiceSection';
import design from '../imgs/index.png';
import intelligence from '../imgs/intelligence.jpg';
import gamedev from '../imgs/gamesIm.jpg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Linux'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'50%'} />
                <SkillsSection skill={'Cpp'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Web Development'} progress={'45%'} width={'25%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web development'} 
                text={' with Javascript and reactjs technologies'}
                /> 
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Studying machine learning models..'}
                />
                <ServicesSection image={gamedev} title={'Building Management systems '} 
                text={'With Cpp and Java and JavaScript'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Devoloping simple games with C++ and Python eg Fizz -Buzz games'}
                />


                
            </div>

        </div>
    )
}
export default AboutPage;