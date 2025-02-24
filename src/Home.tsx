import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import IEEE_COVER from './assets/ieee_cover.jpg';
import TSYP1 from './assets/tsyp.jpg'
import TSYP2 from './assets/ieee_officers.jpg'
import Details from "./Details";
import Carousel from "./Carousel";
import TSYP3 from './assets/ieee_officers2.jpg'
import TSYP4 from './assets/tsyp4.jpeg'
import TSYP5 from './assets/tsyp5.jpeg'

export default function Home() {
    const openingPhrase = "Welcome to";
    const endingPhrase = "IEEE ISET Djerba Student Branch";
    const [copyPhrase, setCopyPhrase] = useState("");
    const [copyEnding, setCopyEnding] = useState("");
    const [indexOpening, setIndexOpening] = useState(0);
    const [indexEnding, setIndexEnding] = useState(0);
    const [isOpeningComplete, setIsOpeningComplete] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);

    const endingPart1 = "IEEE ISET Djerba ";
    const endingPart2 = "Student Branch";

    useEffect(() => {
        let timer: any;

        if (!isOpeningComplete) {
            timer = setInterval(() => {
                if (indexOpening < openingPhrase.length) {
                    setCopyPhrase((prev) => prev + openingPhrase[indexOpening]);
                    setIndexOpening((prev) => prev + 1);
                } else {
                    setIsOpeningComplete(true);
                    clearInterval(timer);
                }
            }, 50);
        } else if (!isRemoving) {
            timer = setInterval(() => {
                if (indexEnding < endingPhrase.length) {
                    setCopyEnding((prev) => prev + endingPhrase[indexEnding]);
                    setIndexEnding((prev) => prev + 1);
                } else {
                    setTimeout(() => {
                        setIsRemoving(true);
                    }, 5000);
                    clearInterval(timer);
                }
            }, 50);
        } else {
            // Backspace effect
            timer = setInterval(() => {
                if (copyEnding.length > 0) {
                    setCopyEnding((prev) => prev.slice(0, -1));
                } else if (copyPhrase.length > 0) {
                    setCopyPhrase((prev) => prev.slice(0, -1));
                } else {
                    setIsOpeningComplete(false);
                    setIsRemoving(false);
                    setIndexOpening(0);
                    setIndexEnding(0);
                    clearInterval(timer);
                }
            }, 100);
        }

        return () => clearInterval(timer);
    }, [indexOpening, indexEnding, isOpeningComplete, isRemoving, copyPhrase, copyEnding]);

    const images = [
        TSYP1,
        TSYP2,
        TSYP3,
        TSYP4,
        TSYP5
    ];
    const isStudentBranchTyped = copyEnding.length > endingPart1.length;

    return (
        <>
            <div
                className="relative w-full h-[50vh] flex flex-col justify-center bg-cover bg-center rounded-br-full rounded-bl-full overflow-hidden"
                style={{ backgroundImage: `url(${IEEE_COVER})` }}
            >
                {/* Blurred Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

                <NavBar />

                {/* Content */}
                <div className="relative z-10 flex mt-72 flex-col justify-center items-center h-full">
                    <div className="w-full max-w-4xl flex flex-col items-start">
                        <div className="text-[40px] font-bold text-blue-700 p-[1px]">
                            {copyPhrase}
                        </div>
                        <span className="text-[45px] font-bold text-white [text-shadow:_2px_2px_0px_#1d4ed8]">
                            {copyEnding.slice(0, endingPart1.length)}
                            {isStudentBranchTyped && (
                                <span className="text-[55px] font-bold text-blue-700 [text-shadow:_2px_2px_0px_blue_300]">
                                    {copyEnding.slice(endingPart1.length)}
                                </span>
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <Details />
            <Carousel images={images} />
        </>
    );
}