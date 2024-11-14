import React from 'react'
import styled from 'styled-components';
import SliderComp from './FacultySlider';
import { Zoom } from 'react-awesome-reveal';

const Faculties = () => {
  return (
    <Container id='project' className='z-10'>
        <Slide 
        // data-scroll data-scroll-speed='3'
        >
            <SliderComp/>
            <h1 className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] text-[white] anton-regular text-[13rem]'>Faculties</h1>
        </Slide>
    </Container>
  )
}

export default Faculties;

const Container = styled.div`
    width: 100%;
    // max-width: 1280px;
    // min-height: 100vh;
    margin: 0 auto;
    padding: 10rem 0;
    text-align: center;
    position: relative;
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