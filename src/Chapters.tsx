import React from "react";
import NavBar from "./NavBar";
import IEEE_COVER from './assets/ieee_cover.jpg';
import DetailsAbout from "./DetailsAbout";
import ChaptersSection from "./ChaptersSection";
import ChapterItems from "./ChapterItems";

export default function Chapters() {
    return (
        <>
           <div
                className="relative w-full h-[50vh] flex flex-col justify-center bg-cover bg-center rounded-br-full rounded-bl-full overflow-hidden"
                style={{ backgroundImage: `url(${IEEE_COVER})` }}
            >
                {/* Blurred Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <NavBar />

              
               

             
                
                
            </div>
            <ChaptersSection/>
            <ChapterItems/>
            
            
             
        </>
    );
}