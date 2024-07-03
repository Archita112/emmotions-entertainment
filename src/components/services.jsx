import Recipecard from './recipecard';
import Servicesimg from '../assets/services_txt_img.svg';
import Weddingimg from '../assets/download (1).jpg'
import Weddingimg2 from '../assets/bridalentry.jpg';
import Weddingimg3 from '../assets/download.jpg';
import Weddingimg4 from '../assets/bridal.jpg';
import Weddingimg5 from '../assets/download (3).jpg';
import Weddingimg6 from '../assets/Mom wedding shot.jpg';

const Services = () => {
    const cardData = [
        {
          image: Weddingimg,
          title: "Event Management & more",
          content: ["Corporate Events", "Weddings", "Birthdays", "Anniversaries", "Family get-together", "School functions"]
        },
        {
          image: Weddingimg2,
          title: "Decoration and Ambience",
          content: ["Balloon Decoration", "Flower Decoration", "Mandap Decor", "LED Wall", "Cold Fire"]
        },
        {
          image: Weddingimg3,
          title: "Special Entries & more",
          content: ["Doli","Tutariwala","Band Party", "Ghodi", "Feta Wala"]
        },
        {
          image: Weddingimg4,
          title: "Music and Performance",
          content: ["Music System","Sound DJ", "Symphony", "Orchestra Live Music","Choreographer / Dance Training", "Sound and Light"]
        },
        {
          image: Weddingimg5,
          title: "Entertainment and more",
          content: ["Magician", "Puppet Show", "Game Anchor / Host", "Ring Game", "Sketch Artist", "Tattoo Artist", "Jumper"]
        },
        {
          image: Weddingimg6,
          title: "Professional Services",
          content: ["Celebrity Management", "Anchor", "Mehandi / Makeup Artist", "Photography and Videography"]
        },
      ];
      
    return(
        <div className="flex flex-col justify-center items-center gap-y-4 mb-10">
            <div>
                <h1 className="text-4xl mt-10 font-semibold"><img src={Servicesimg} alt="noimg"/></h1>
            </div>
            <div className="flex flex-col justify-between w-full p-10 gap-y-7 items-center lg:flex-row lg:items-stretch flex-wrap gap-10">
                {cardData.map((card, index) => (
                <Recipecard
                    key={index}
                    image={card.image}
                    title={card.title}
                    content={card.content}
                    className="w-full sm:w-1/2 lg:w-1/3 max-w-sm"
                />
                ))}
            </div>
        </div>
    );
}

export default Services;