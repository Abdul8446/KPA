// import { Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';

const ImageComponent = (props) => {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const image = new Image();
    image.src = props.children.props.src;
    image.height = props.children.props.height;
    image.width = props.children.props.width;

    image.onload = () => {
      setLoading(false);
    };
    // Clean up the image object on component unmount
    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <>
      {loading ? (
        <>
          <img src={props.src} style={{display:'none'}} onError={()=>setLoading(false)} />
          {/* <Skeleton variant={props.variant} 
          animation={props.animation} 
          height={props.selfheight} 
          width={props.selfwidth} 
          sx={{height:props.height, width:props.width, background:props.background,borderRadius:props.borderRadius}} className='rounded-2xl'/> */}
        </>
      ) : (
        props.children  
      )}   
    </>
  );
};

export default ImageComponent;
