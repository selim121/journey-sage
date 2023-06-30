import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const GridGallery = ({ images }) => {
    const [imagesShownArray, setImagesShownArray] = useState(
        Array(images.length).fill(false)
    );

    const imageVisibleChange = (index, isVisible) => {
        if (isVisible) {
            setImagesShownArray((currentImagesShownArray) => {
                currentImagesShownArray[index] = true;
                return [...currentImagesShownArray];
            });
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images &&
                images.map((imageUrl, index) => (
                    <VisibilitySensor
                        key={index}
                        partialVisibility={true}
                        offset={{ bottom: 80 }}
                        onChange={(isVisible) => imageVisibleChange(index, isVisible)}
                    >
                        <GridGalleryCard
                            imageUrl={imageUrl}
                            show={imagesShownArray[index]}
                        />
                    </VisibilitySensor>
                ))}
        </div>
    );
}

export default GridGallery;

const GridGalleryCard = ({ imageUrl, show }) => {
    return (
        <div
            className={`relative transition ease-in duration-300 transform ${show ? "" : "translate-y-16 opacity-0"
                }`}
        >
            <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 hover:cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="mx-auto text-[#FF9933] z-10 self-center uppercase tracking-widest text-sm">
                    Book Now
                </div>
            </div>
            <Image src={imageUrl} alt="" />
        </div>
    );
}
