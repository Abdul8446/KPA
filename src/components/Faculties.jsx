import React from 'react'
import styled from 'styled-components';
import SliderComp from './FacultySlider';
import { Zoom } from 'react-awesome-reveal';

const Faculties = () => {
  return (
    <Container id='project' className='z-10 py-10 xl:pt-24'>
        <h1 className='text-[#BB914A] lato-bold-italic  text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-y-[70%] xl:-translate-x-1/2 xl:text-white'>Faculties</h1>
        <Slide 
        // data-scroll data-scroll-speed='3'
        >
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Faculties;

const Container = styled.div`
    width: 100%;
    // max-width: 1280px;
    // min-height: 80vh;
    margin: 0 auto;
    // padding: 10rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    @media(max-width: 840px){
        width: 100%;
    }
    h1{
        // font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 100%;
        }
    }
    
`

const Slide = styled.div``