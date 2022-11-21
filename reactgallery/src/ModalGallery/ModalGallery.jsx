import "./fontello/css/fontello-codes.css"
import "./fontello/css/fontello-embedded.css"
import "./fontello/css/fontello-ie7-codes.css"
import "./fontello/css/fontello-ie7.css"
import "./fontello/css/fontello.css"

import "./style.css"

import { useState, useEffect } from "react"

export const ModalGallery = () => {

    const imagesInGallery = [
        "https://images.unsplash.com/photo-1668787088962-04516e2829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
        "https://images.unsplash.com/photo-1668790364202-8a0670c90e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
        "https://images.unsplash.com/photo-1668718031554-9c05b5d03750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        "https://plus.unsplash.com/premium_photo-1667621221108-d9ff42adee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ]

    const maxIndexOfImagesInGallery = imagesInGallery.length-1;

    const numberOfImagesToDisplay = 4;

    var [activeIndex,setActiveIndex] = useState(0);

    var [indexToDisplay,setIndexToDisplay] = useState(calculateIndexesToDisplay());
    
    function calculateIndexesToDisplay (){
        var arrayOfIndexes = []
        
        for (let index = activeIndex ; index<numberOfImagesToDisplay+activeIndex ; index++){
            let offset = (index>maxIndexOfImagesInGallery)?maxIndexOfImagesInGallery+1:0
            arrayOfIndexes.push(index - offset)
        }
        return (arrayOfIndexes)

    }

    function handlePreviousClick(){
        var tempIndex = activeIndex - 1
        if (tempIndex<0) tempIndex = maxIndexOfImagesInGallery
        setActiveIndex(tempIndex)
    }
    
    function handleNextClick(){
        var tempIndex = activeIndex + 1
        if (tempIndex>maxIndexOfImagesInGallery) tempIndex = 0
        setActiveIndex(tempIndex)
        
    }

    useEffect(()=>{
    setIndexToDisplay(calculateIndexesToDisplay())
    },[activeIndex])

    return(
    
    <div className="gallery" data-activeindex={activeIndex}>
        <div className="nav-arrow nav-previous"><div className="icon-left-open" onClick={()=>handlePreviousClick()}></div></div>
        {indexToDisplay.map((imageIndex,index)=>{
            return( 
                <div className="image-container"  key={index} >
                    <img className="image" src={imagesInGallery[imageIndex]}/>
                    {imageIndex}
                </div>)
        })}

        <div className="nav-arrow nav-next"><div className="icon-right-open" onClick={()=>handleNextClick()}></div></div>
    </div>

    )
}