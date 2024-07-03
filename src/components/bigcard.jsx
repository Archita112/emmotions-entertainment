const Bigcard = ({texttitle, textcontent}) => {
    const contentItems = textcontent.split('\n').filter(item => item.trim() !== '');

    return(
        <div className='bg-customSkin w-80 h-60 flex flex-col rounded-lg'>
            <div className="text-center text-customBlue text-2xl font-semibold border border-customSkin rounded-lg mt-3 ml-1 mr-1">
                <p>{texttitle}</p>
            </div>
            <div className="p-4 h-60 w-50 justify-center items-center">
                <ul className='text-customBlue leading-tight text-lg text-center'>
                {contentItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Bigcard;