import Abouttxt from '../assets/about_us_txt.svg';
import Imgl from '../assets/about_us_imgl.svg';
import Textimgr from '../assets/about_us_txtr.svg';

const Aboutus = () => {
    return(
        <div className='flex flex-col items-center gap-y-10'>
            <img src={Abouttxt} alt='noimg'/>
            <div className='flex flex-col items-center justify-between p-10 w-full sm:flex-row gap-y-8'>
                <img src={Imgl} alt='noimg'/>
                <div className='flex flex-col sm:text-right text-center gap-y-10'>
                    <img src={Textimgr} alt='noimg'/>
                    <p>At Emmotions Entertainment, your happiness is our top<br></br> priority. Every event we plan is a testament to our<br></br> commitment to excellence and our passion for bringing<br></br> your visions to life. We understand the<br></br>significance of your special occasions, and we are<br></br> dedicated to making each moment truly extraordinary.</p>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;