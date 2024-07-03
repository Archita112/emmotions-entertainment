import whyimg from '../assets/why_usimg.svg';

const Why = () => {
    return(
        <div className='flex flex-col gap-y-8 justify-center items-center'>
            <img src={whyimg} alt='noimg'/>
            <p className='text-center p-4 sm:p-4 text-sm'>Choosing Emmotions Entertainment means partnering with<br></br> a team dedicated to creating unforgettable events with unmatched professionalism and attention to detail.<br></br> Our experienced and skilled team provides high-quality, punctual<br></br> services tailored to your unique vision, ensuring every aspect of your event is flawlessly executed.<br></br> With a wide array of entertainment options, creative decorations, and comprehensive event management, we guarantee a<br></br> seamless and stress-free experience. Our commitment to customer satisfaction, competitive pricing, and flexible approach<br></br> make us the ideal choice for all your event planning needs.</p>
            <div className='flex flex-col w-full p-10 gap-y-6 items-center'>
                <div className='flex flex-col justify-between w-full sm:flex-row items-center gap-y-7'>
                    <div className='bg-customBlue w-60 h-30 rounded-lg'>
                        <p className='text-customSkin text-center text-lg p-2'>Experienced Team</p>
                    </div>
                    <div className='bg-customBlue w-60 h-30 rounded-lg'>
                        <p className='text-customSkin text-center text-lg p-2'>Quality Services</p>
                    </div>
                    <div className='bg-customBlue w-60 h-30 rounded-lg'>
                        <p className='text-customSkin text-center text-lg p-2'>Perfect Event Management</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between w-full sm:flex-row items-center gap-y-7'>
                    <div className='bg-customBlue w-60 h-30 rounded-lg'>
                        <p className='text-customSkin text-center text-lg p-2'>Seamless experience</p>
                    </div>
                    <div className='bg-customBlue w-60 h-30 rounded-lg'>
                        <p className='text-customSkin text-center text-lg p-2'>Affordable prices</p>
                    </div>
                    <div className='bg-customBlue w-60 h-30 rounded-lg'>
                        <p className='text-customSkin text-center text-lg p-2'>Creative Decorations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;