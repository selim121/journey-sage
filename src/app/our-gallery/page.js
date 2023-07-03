import GridGallery from "@/components/Gallery/Gallery";
import img1 from '../../images/gallery/bandarban.jpeg';
import img2 from '../../images/gallery/coxsbazar.jpeg';
import img3 from '../../images/gallery/saintmartin.jpeg';
import img4 from '../../images/gallery/sitakundu.jpeg';
import img5 from '../../images/gallery/sunamgang.jpeg';
import img6 from '../../images/gallery/sylet.jpeg';

const OurGallery = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    ];

    return (
        <div className="my-12 px-4">
            <div className="my-8">
                <h1 className='text-4xl font-bold border-l-8 border-[#FF9933] ps-3'>Activities that makes you thrilled</h1>
            </div>
            <GridGallery images={images} />
        </div>
    );
}

export default OurGallery;
