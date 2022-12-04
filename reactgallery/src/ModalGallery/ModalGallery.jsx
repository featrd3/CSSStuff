import "./fontello/css/fontello-codes.css"
import "./fontello/css/fontello-embedded.css"
import "./fontello/css/fontello-ie7-codes.css"
import "./fontello/css/fontello-ie7.css"
import "./fontello/css/fontello.css"

import "./style.css"

import { useEffect, useState } from "react"

export const ModalGallery = () => {

    const imagesInGallery = [
        "https://images.unsplash.com/photo-1668787088962-04516e2829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
        "https://images.unsplash.com/photo-1668790364202-8a0670c90e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
        "https://images.unsplash.com/photo-1668718031554-9c05b5d03750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        "https://plus.unsplash.com/premium_photo-1667621221108-d9ff42adee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ]

    const maxIndexOfImagesInGallery = imagesInGallery.length-1;

    const numberOfImagesToDisplay = 3;

    var isLessImagesToDisplayThanAvailable = numberOfImagesToDisplay<=maxIndexOfImagesInGallery+1

    var [shiftDirection,setShiftDirection] = useState ('');

    var [activeIndex,setActiveIndex] = useState({activeIndexes:0,displayingLastIndex:false,displayingFirstIndex:true});

    function handlePreviousClick(){
        setShiftDirection('right')

        var tempIndex = activeIndex.activeIndexes - 1
        if (tempIndex<0) tempIndex = 0
        setActiveIndex({
            activeIndexes:tempIndex,
            displayingFirstIndex:(tempIndex == 0)?true:false,
            displayingLastIndex:(tempIndex == maxIndexOfImagesInGallery-numberOfImagesToDisplay+1)?true:false,
            })
    }

    function handleNextClick(){
        setShiftDirection('left')

        var tempIndex = activeIndex.activeIndexes + 1
        if (tempIndex>=maxIndexOfImagesInGallery) tempIndex = maxIndexOfImagesInGallery
        setActiveIndex({
            activeIndexes:tempIndex,
            displayingFirstIndex:(tempIndex == 0)?true:false,
            displayingLastIndex:(tempIndex == maxIndexOfImagesInGallery-numberOfImagesToDisplay+1)?true:false,
        })
    }

    useEffect(()=>{ const myTimeout = setTimeout(()=>setShiftDirection(''), 1000);},[activeIndex])

    return(
    <div className="modalGalleryContainer">
        <div className="nav-arrow nav-previous">
            {(isLessImagesToDisplayThanAvailable && !activeIndex.displayingFirstIndex)
            ?<div className="icon-left-open" onClick={()=>handlePreviousClick()}></div>
            :<></>
            }
        </div>
        <div className="gallery">
            <div className="images images-container-transition">
                {imagesInGallery.map((image,index)=>{
                    var classTxt = "image-container"
                    if (activeIndex.activeIndexes<=(index) && activeIndex.activeIndexes+numberOfImagesToDisplay>(index))
                        classTxt=classTxt+" active"
                    return( 
                        <div className={classTxt} key={index} data-position={index} data-status={shiftDirection}>
                            <img className="image" src={image}/>
                        </div>)
                })}
            </div>
            <div className="activeImgIndicator">
                {imagesInGallery.map((image,index)=>{
                    if(activeIndex.activeIndexes<=(index) && activeIndex.activeIndexes+numberOfImagesToDisplay>(index)){
                        return(<div className="indicatorSelected" key={index} >
                            •
                        </div>)}
                    else{ 
                        return(<div className="indicator" key={index} >
                            •
                        </div>)
                    }
                })} 
            </div>
        </div>
        <div className="nav-arrow nav-next">
        {(isLessImagesToDisplayThanAvailable && !activeIndex.displayingLastIndex)
            ?<div className="icon-right-open" key="navigation-right" onClick={()=>handleNextClick()}></div>
            :<></>
            }  
        </div>
    </div>
    )
}