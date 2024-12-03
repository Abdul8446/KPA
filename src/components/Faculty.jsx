import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion'

const Faculty = (props) => {
    const { img, disc, name, frame } = props.item;
  return (
    // <Container className='project bg-white rounded-2xl'>
    //     <img src={img} className='relative z-10 rounded-2xl transition-all aspect-square object-top w-[60%] duration-1000' alt="project" />
    //     <div className="disc">
    //         <h1 className='lato-regular-italic'>{name}</h1>
    //         <p className='merriweather-light-italic'>{disc}</p>
    //     </div>
    //     {/* <div className={`background-frame-1 absolute left-1/2 -translate-x-1/2 inset-0 aspect-square w-[60%]  bg-[#003A2E] opacity-70 transform -rotate-3 rounded-2xl scale-[1.2] z-0`}></div> */}
    //     {/* <div className={`background-frame-2 absolute left-1/2 -translate-x-1/2 inset-0 aspect-square w-[60%]  bg-[#003A2E] opacity-20 transform -rotate-3 rounded-2xl scale-[1.2] -z-10'`}></div> */}
    // </Container>
    <div className="max-w-64 p-2 mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        {/* <div className="w-64 h-64 mb-4 overflow-hidden object-top rounded-2xl"> */}
          {/* <img 
            src={img}
            alt="Profile"
            className="object-top aspect-square w-[90%]"
          /> */}
          <img src={img} className='relative rounded-3xl transition-all aspect-square object-top object-cover duration-1000' alt="project" />
        {/* </div> */}
        
        {/* Name */}
        <h2 className="text-cyan-400 text-2xl font-bold mb-2">
          {name}
        </h2>
        
        {/* Title */}
        <p className="text-gray-700 text-sm font-medium uppercase tracking-wide mb-2">
          {disc}
        </p>
        
        {/* Email */}
        <a 
          href="mailto:resources@citizens.me" 
          className="text-gray-600 text-sm hover:text-cyan-400 transition-colors"
        >
          resources@citizens.me
        </a>
      </div>
    </div>
  )
}

export default Faculty;

const Container = styled.div`
    height: 25rem;
    // background-color: #4e5156;
    margin: 0 1.5rem;
    position: relative;
    // overflow: hidden;
    img{

        // width: 60%;
        // height: auto;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        // position: absolute;
        text-align: left;
        width:73%;
        margin-top:30px;
        margin-left:auto;
        margin-right:auto; 
       

        transition: all 400ms ease-in-out;
        h1{
            font-size: 1.5rem;
        }
    
        p{
            width: 100%;
            margin-right:auto;
            font-size: 0.8rem;
            a{
                // margin-l eft: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
    }

    :hover > .disc{
        bottom: 0;
    }

`

