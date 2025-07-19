export default function Target(){
    return(
        <>
            <div  className="flex items-center  dark:outline-[#2b2a30] dark:outline justify-center w-90 h-45 rounded-2xl ">
                <div className="display grid grid-cols-3 w-full h-full">
                    <div className="col-span-1 bg-[#3c3b42] flex items-center rounded-l-[13.5px] justify-center">
                        <img src="" alt=""/>
                    </div>
                    <div className="bg-[#2b2a30] col-span-2 rounded-r-[calc(theme(borderRadius.2xl)-3px)] flex items-center justify-center">

                    </div>
                </div>
            </div>
        </>
    );
}

