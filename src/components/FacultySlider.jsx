import React, { useRef, useEffect } from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import Faculty from './Faculty';
import rightArrow from '../assets/images/rightarrow.png'
import playCursor from '../assets/images/playcursor.webp'
import sumiyaTeam from '../assets/images/sumiya-team.png'
import rahulTeam from '../assets/images/rahul-team.png'
import rinshithaTeam from '../assets/images/rinshitha-team.png'
import muhsinaTeam from '../assets/images/muhsina-team.png'
import bheemaTeam from '../assets/images/bheema-team.png'
import lasminaTeam from '../assets/images/lasmina-team.png'
import deepikaTeam from '../assets/images/deepika-team.png'
import shirineTeam from '../assets/images/shirine-team.png'
import fazeelathTeam from '../assets/images/fazeelath-team.png'
import raniaTeam from '../assets/images/rania-team.png'
import badhushaTeam from '../assets/images/badhusha-team.png'
import zamilTeam from '../assets/images/zamil-team.png'
import jasimTeam from '../assets/images/jasim-team.png'

let data = [
    {
      name: 'Sumiya Yusaf',
      disc: 'Director of academic & training',
      img: sumiyaTeam,
      mail: 'dr-academic.kingpins.website'
    },
    {
      name: 'Rahul Govind',
      disc: 'Manager, operations',
      img: rahulTeam,
    },
    {
      name: 'Rinshitha Ali',
      disc: 'Asst. Manager, operations',
      img: rinshithaTeam,
    },
    {
      name: 'Mohzina Ak',
      disc: 'Senior faculty',
      img: muhsinaTeam,
      mail:''
    },
    {
      name: 'Bheema Ali',
      disc: 'Senior faculty',
      img: bheemaTeam,
    },
    {
      name: 'Lasima Safad',
      disc: 'Senior faculty',
      img: lasminaTeam,
    },
    {
      name: 'Deepika Sathish',
      disc: 'Skyblue Faculty',
      img: deepikaTeam,
    },
    {
      name: 'Shirine Fathima',
      disc: 'Skyblue Faculty',
      img: shirineTeam,
    },
    {
      name: 'Fazeelat',
      disc: 'Skyblue team',
      img: fazeelathTeam,
    },
    {
      name: 'Rania Raheem',
      disc: 'Admin Team',
      img: raniaTeam,
    },
    {
      name: 'Badhusha MM',
      disc: 'Faculty',
      img: badhushaTeam,
    },
    {
      name: 'Zamil Yousef',
      disc: 'Accounts Team',
      img: zamilTeam,
    },
    {
      name: 'Jasim Azeez',
      disc: 'Content Creator',
      img: jasimTeam,
    },
    // {
    //   name: 'Maria Sharapova',
    //   disc: 'World-Class Tennis Superstar, Investor and Entrepreneur',
    //   img: 'https://apim.dct.gov.ae/SCD//media/mdzhnr5t/maria-sharapova.jpg',
    // }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    centerPadding: "0px", 
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);

    let sliderProject = data.map((item, i) => {
        return <Faculty item={item} key={i} />;
    });

    useEffect(()=>{
        const sliderContainer = document.querySelector('.slider-container');
        const sliderItems = document.querySelectorAll('.slider-item');

        sliderContainer.addEventListener('mousemove', (e) => {
            const containerWidth = sliderContainer.offsetWidth;
            const centerImageWidth = document.querySelector('.slick-center').offsetWidth*.6*1.3;
            const customCursor = document.querySelector('.custom-cursor');

            // Position the custom cursor element
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;

            // Get mouse position relative to the container
            const mouseX = e.clientX - sliderContainer.getBoundingClientRect().left;
            console.log(mouseX,containerWidth/2, centerImageWidth/2)
            if (mouseX < (containerWidth/2) - (centerImageWidth/2)) {
                console.log('left');
                // Left side - show previous arrow cursor
                customCursor.style.backgroundImage = `url('${rightArrow}')`;
                customCursor.style.transform = "rotate(180deg) translate(50%, 50%)"
            } else if (mouseX >(containerWidth/2) + (centerImageWidth/2)) {
                console.log('right');
                // Right side - show next arrow cursor
                customCursor.style.backgroundImage = `url('${rightArrow}')`;
                customCursor.style.transform = 'unset'
            } else { 
                console.log('center');
                // Center - show play cursor
                customCursor.style.backgroundImage = `url('${playCursor}')`;
                customCursor.style.transform = 'unset'
            }
        });

        // Optional: Add click events
        sliderContainer.addEventListener('click', (e) => {
            const containerWidth = sliderContainer.offsetWidth;
            const centerImageWidth = document.querySelector('.slick-center').offsetWidth*.6*1.3;
            const containerCenter = containerWidth / 2;
            const mouseX = e.clientX - sliderContainer.getBoundingClientRect().left;
           

            if (mouseX < (containerWidth/2) - (centerImageWidth/2)) {
                // Slide to the previous item
                arrowRef.current.slickPrev();
                 // Adjust this value for more or less skew
                
            } else if (mouseX >(containerWidth/2) + (centerImageWidth/2)) {
                // Slide to the next item
                arrowRef.current.slickNext();
            } else {
                // Navigate to details page
                navigateToDetails();
            }
        });

       
        // Ensure the custom cursor is hidden when leaving the slider area
        sliderContainer.addEventListener('mouseleave', function() {
            document.querySelector('.custom-cursor').style.display = 'none';
        });

        sliderContainer.addEventListener('mouseenter', function() {
            document.querySelector('.custom-cursor').style.display = 'block';
        });

    },[])


   
  return (
    <Container className='slider-container'>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <div className='custom-cursor'></div>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    // cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`