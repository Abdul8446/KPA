import React from 'react'
import styled from 'styled-components';
import SliderComp from './FacultySlider';
import { Zoom } from 'react-awesome-reveal';

const Faculties = () => {
  return (
    <Container id='project' className='z-10 py-10 xl:pt-24'>
        <h1 className='text-[#BB914A] ml-6 lato-black-italic  text-[4rem] whitespace-nowrap'>People <span className='lato-black text-[black]'>To Know</span></h1>
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
    text-align: left;
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