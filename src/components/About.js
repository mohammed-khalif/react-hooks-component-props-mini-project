import React from "react";
import about from about
function About({image='https://via.placeholder.com/215', about}){
    const { imageSrc, aboutText } = props;
    const defaultImageSrc = "https://via.placeholder.com/215";
    const imageAlt = "blog logo";
  
    return(
        <aside>
            <img src={image} alt="blog logo"/>
            <img src={imageSrc || defaultImageSrc} alt={imageAlt} />

            <p>{aboutText}</p>
        </aside>
    ) 
}

export default About;