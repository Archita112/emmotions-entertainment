import Bigcard from "./bigcard";
import Servicesimg from '../assets/services_txt_img.svg';

const Services = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-y-4 mb-10">
            <div>
                <h1 className="text-4xl mt-10 font-semibold"><img src={Servicesimg} alt="noimg"/></h1>
            </div>
            <div className="flex flex-col justify-between w-full p-10 gap-y-7 items-center lg:flex-row lg:items-stretch">
                <Bigcard
                texttitle={'Event Management'}
                textcontent={`Corporate Events\n
                Weddings\n
                Birthdays\n
                Anniversaries\n
                Family Get-Togethers\n
                School Functions`}
                />

            <Bigcard 
                texttitle={'Decoration and Ambience'}
                textcontent={`Balloon Decoration \n
                Flower Decoration\n
                Mandap Decor\n
                LED Wall\n
                Cold Fire`}
                />

            <Bigcard 
                texttitle={'Special Entries'}
                textcontent={`Doli \n
                Tutariwala \n
                Ghodi \n
                Band Party\n
                Feta Wala\n`}
                />
            </div>
            <div className="flex flex-col justify-between w-full p-10 gap-y-7 items-center lg:flex-row lg:items-stretch">
            <Bigcard 
                texttitle={'Music and Performance'}
                textcontent={`Music System \n
                                Sound DJ\n
                                Symphony\n
                                Orchestra Live Music\n
                                Choreographer / Dance Training\n
                                Sound and Light`}
                />

            <Bigcard 
                texttitle={'Entertainment'}
                textcontent={`Magician\n
                                Puppet Show\n
                                Game Anchor / Host\n
                                Ring Game\n
                                Sketch Artist\n
                                Tattoo Artist\n
                                Jumper`}
                />

            <Bigcard 
                texttitle={'Professional'}
                textcontent={`Celebrity Management\n
                                Anchor\n
                                Mehandi / Makeup Artist\n
                                Photography and Videography`}
                />
            </div>
        </div>
    );
}

export default Services;