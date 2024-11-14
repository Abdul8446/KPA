import React, { useRef, useEffect } from 'react'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import Faculty from './Faculty';
import rightArrow from '../assets/images/rightarrow.png'
import playCursor from '../assets/images/playcursor.webp'

let data = [
    {
        name: 'Hussain Al Jassmi',
        disc: 'Innovative Arabian and Emirati Singer and Composer',
        img: 'https://apim.dct.gov.ae/SCD//media/ldhhwnxi/hussain-al-jassmi.jpg',
      },
      {
        name: 'Magdalena Moreno Mujica',
        disc: 'Executive Director, IFACCA',
        img: 'https://apim.dct.gov.ae/SCD//media/qrwl0ehd/magdalena-moreno-mujica.jpg',
      },
      {
        name: 'Dr. Ridha Moumni',
        disc: 'Chairman, Christie’s Middle East and North Africa',
        img: 'https://apim.dct.gov.ae/SCD//media/qikhxdft/dr-ridha-moumni.jpg',
      },
      {
        name: 'Sandhini Poddar',
        title: 'Adjunct Curator, Guggenheim Abu Dhabi',
        img: 'https://apim.dct.gov.ae/SCD//media/bwonp42g/sandhini-poddar.jpg',
      },
      {
        name: 'Alexandra Munroe',
        title: 'Senior Curator',
        img: 'https://apim.dct.gov.ae/SCD//media/r12huqel/alexandra-munroe.jpg',
      },
      {
        name: 'Steve Harvey',
        disc: 'Global philanthropist, investor and award-winning entertainer',
        img: 'https://apim.dct.gov.ae/SCD//media/qzrhibm4/steve-harvey.jpg',
      },
      {
        name: 'Harvey Mason Jr',
        disc: 'CEO, Recording Academy®',
        img: 'https://apim.dct.gov.ae/SCD//media/p2danjyb/harvey-mason-jr.jpg',
      },
      {
        name: 'Abeer Seikaly',
        disc: 'Architect and Founder, Studio Abeer Seikaly',
        img: 'https://apim.dct.gov.ae/SCD//media/jp0jaah4/abeer-seikaly.jpg',
      },
      {
        name: 'Ahmad Abdulrahman Bukhash',
        disc: 'Chief Architect and Founder, Archidentity',
        img: 'https://apim.dct.gov.ae/SCD//media/ujlisajz/ahmad-abdulrahman-bukhash.jpg',
      },
      {
        name: 'Huda Alkhamis-Kanoo',
        disc: 'Founder, Abu Dhabi Music & Arts Foundation (ADMAF)',
        img: 'https://apim.dct.gov.ae/SCD//media/czchrrrd/huda-alkhamis-kanoo.jpg',
      },
      {
        name: 'Gael Hedding',
        disc: 'Director, Berklee Abu Dhabi',
        img: 'https://apim.dct.gov.ae/SCD//media/tftneehy/gael-hedding.jpg',
      },
      {
        name: 'Dr. Pradeep Sharma',
        title: 'Director of Arts, Culture and Heritage, Salama bint Hamdan Al Nahyan Foundation',
        img: 'https://apim.dct.gov.ae/SCD//media/fv0fetqc/dr-pradeep-sharma.jpg',
      },
      {
        name: 'Maria Sharapova',
        disc: 'World-Class Tennis Superstar, Investor and Entrepreneur',
        img: 'https://apim.dct.gov.ae/SCD//media/mdzhnr5t/maria-sharapova.jpg',
      }
    
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    centerPadding: "100px", 
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