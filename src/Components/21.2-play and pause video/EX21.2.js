import React, { useState, useEffect,useRef} from 'react'

export default function EX21() {

    let  VideoRef = useRef()
    
    
    
    const STOP = () =>{
        VideoRef.current.pause();
    }

    const PLAY = () =>{
        VideoRef.current.play();
    }

    return (
        <div>
           <iframe width="560" 
           height="315" 
           src="https://www.youtube.com/embed/Cb3ggoyqXmU" 
           title="YouTube video player" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen
           ref={VideoRef}></iframe>
           <button onClick={STOP}>Stop</button>
           <button onClick={PLAY}>play</button>
        </div>

    )
}
