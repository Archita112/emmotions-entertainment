import Rightimg from '../assets/section_one_imgr.svg';
import Leftimg from '../assets/section_one_img.svg';

const MainS = () => {
    return(
        <div className='flex justify-between items-center p-10 flex-col sm:flex-row'>
            <div className='flex flex-col gap-y-10 items-start mb-8 sm:text-left text-center'>
                <img src={Leftimg} alt="noimg"/>
                <p>We understand that every event is unique and special. <br></br>Our mission is to transform your dreams into reality with<br></br> meticulous planning, creative designs, and flawless execution.<br></br>We specialize in organizing and planning a wide range of<br></br> events, including birthdays, wedding ceremonies, corporate<br></br> functions, and more.</p>
            </div>
            <div>
                <img src={Rightimg} alt='noimg'  className='h-100 md:h-100'/>
            </div>
        </div>
    );
}

export default MainS;