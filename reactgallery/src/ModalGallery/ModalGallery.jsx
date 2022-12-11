import "./fontello/css/fontello-codes.css"
import "./fontello/css/fontello-embedded.css"
import "./fontello/css/fontello-ie7-codes.css"
import "./fontello/css/fontello-ie7.css"
import "./fontello/css/fontello.css"

import "./style.css"

import { useState } from "react"

export const ModalGallery = ({imagesInGallery, numberOfImagesToDisplay = 3, icon_right = "icon-right-open", icon_left = "icon-left-open"}) => {

    var maxIndexOfImagesInGallery = imagesInGallery.length - 1;

    var isLessImagesToDisplayThanAvailable = numberOfImagesToDisplay <= maxIndexOfImagesInGallery + 1

    var [activeIndex,setActiveIndex] = useState({
        activeIndexes: 0,
        displayingLastIndex: false,
        displayingFirstIndex: true
        });

    function handlePreviousClick(){
        var tempIndex = activeIndex.activeIndexes - 1
        if (tempIndex < 0) tempIndex = 0
        setActiveIndex({
            activeIndexes: tempIndex,
            displayingFirstIndex: (tempIndex === 0) ? true : false,
            displayingLastIndex: (tempIndex === maxIndexOfImagesInGallery - numberOfImagesToDisplay + 1) ? true : false
            })
    }

    function handleNextClick(){
        var tempIndex = activeIndex.activeIndexes + 1
        if (tempIndex >= maxIndexOfImagesInGallery) tempIndex = maxIndexOfImagesInGallery
        setActiveIndex({
            activeIndexes: tempIndex,
            displayingFirstIndex: (tempIndex === 0) ? true : false,
            displayingLastIndex: (tempIndex === maxIndexOfImagesInGallery - numberOfImagesToDisplay + 1) ? true : false
            })
    }

    return(
    <div className = "modalGallery_Container">
        <div className = "modalGallery_nav-arrow">
            {(isLessImagesToDisplayThanAvailable && !activeIndex.displayingFirstIndex)?
            <div className = {icon_left} onClick = {() => handlePreviousClick()}></div>
            :<></>
            }
        </div>
        <div className = "modalGallery_gallery">
            <div className = "modalGallery_images">
                {imagesInGallery.map((image,index) => {
                    return( 
                        <div style={{
                            transform: "translateX("+
                                (-activeIndex.activeIndexes + (maxIndexOfImagesInGallery + 1 - numberOfImagesToDisplay)/2 ) *100
                                +"%)",
                            width: (100/numberOfImagesToDisplay) + "%"}}
                            key = {index} data-position = {index}>
                            <img src = {image} alt = {"img_"+index}/>
                        </div>)
                })}
            </div>
            <div className = "modalGallery_displayedImgIndicator">
                {imagesInGallery.map((image,index) => {
                    if( activeIndex.activeIndexes <= (index) && 
                    activeIndex.activeIndexes + numberOfImagesToDisplay > (index)){
                        return(<div className = "modalGallery_indicatorSelected" key = {index} >
                            •
                        </div>)}
                    else{ 
                        return(<div className = "modalGallery_indicator" key = {index} >
                            •
                        </div>)
                    }
                })} 
            </div>
        </div>
        <div className = "modalGallery_nav-arrow">
        {(isLessImagesToDisplayThanAvailable && !activeIndex.displayingLastIndex)?
            <div className = {icon_right} key = "navigation-right" onClick = {() => handleNextClick()}></div>
            :<></>
            }  
        </div>
    </div>
    )
}