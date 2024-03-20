import React, { useState } from 'react';
import facebook from '../prefabs/images/icon-facebook.svg';
import insta from '../prefabs/images/icon-instagram.svg';
import twit from '../prefabs/images/icon-twitter.svg';
import yuochube from '../prefabs/images/icon-youtube.svg';
import arrowUp from '../prefabs/images/icon-up.svg';
import arrowDown from '../prefabs/images/icon-down.svg';

const MainComponent = () => {
    const [darkSwitch, setDarkSwitch] = useState<string>("light");

    const switchMode = () => {
        if(darkSwitch === "light"){
            setDarkSwitch("dark");
        }else{
            setDarkSwitch("light");
        }
    }

    return (
        <div className={darkSwitch}>
            <div className='bg-[#f5f7ff] dark:bg-[#1e202a] h-[15rem] w-screen inter rounded-b-xl'>
                <div className='flex justify-center'>
                    <div className='w-4/5'>
                        <p className='mt-10 mb-1 textStandard text-3xl font-bold'>Social Media Dashboard</p>
                        <p className='text-sm tracking-wide textLight font-bold'>Total Followers: 23,004</p>

                        <div className='flex justify-between mt-10'>
                            <div className='bg-[#f0f2fa] w-[265px] rounded-b-lg rounded-t-sm'>
                                <div className='flex justify-center '>
                                    <div className='w-[100%] h-[4px] bg-[#198ff5] rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={facebook} alt="Facebook Logo" />
                                    <p className='textLight font-bold text-sm'>@nathanf</p>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <p className='textStandard font-bold text-5xl'>1987</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight font-semibold text-xs tracking-[0.3em]'>FOLLOWERS</p>
                                </div>
                                <div className='flex justify-center mt-4 mb-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                    <p className='textGreen text-sm font-bold'>12 Today</p>
                                </div>
                            </div>

                            <div className='bg-[#f0f2fa] w-[265px] rounded-b-lg rounded-t-sm'>
                                <div className='flex justify-center '>
                                    <div className='w-full h-[4px] bg-[#1ca0f2] rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={twit} alt="Twitter Logo" />
                                    <p className='textLight font-bold text-sm'>@nathanf</p>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <p className='textStandard font-bold text-5xl'>1044</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight font-semibold text-xs tracking-[0.3em]'>FOLLOWERS</p>
                                </div>
                                <div className='flex justify-center mt-4 mb-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                    <p className='textGreen text-sm font-bold'>99 Today</p>
                                </div>
                            </div>

                            <div className='bg-[#f0f2fa] w-[265px] rounded-b-lg rounded-t-sm'>
                                <div className='flex justify-center '>
                                    <div className='w-[100%] h-[4px] instaGrad rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={insta} alt="Instagram Logo" />
                                    <p className='textLight font-bold text-sm'>@realnathanf</p>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <p className='textStandard font-bold text-5xl'>11k</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight font-semibold text-xs tracking-[0.3em]'>FOLLOWERS</p>
                                </div>
                                <div className='flex justify-center mt-4 mb-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                    <p className='textGreen text-sm font-bold'>1099 Today</p>
                                </div>
                            </div>

                            <div className='bg-[#f0f2fa] w-[265px] rounded-b-lg rounded-t-sm'>
                                <div className='flex justify-center '>
                                    <div className='w-[100%] h-[4px] bg-[#c4032a] rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={yuochube} alt="Youtube Logo" />
                                    <p className='textLight font-bold text-sm'>Nathan F.</p>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <p className='textStandard font-bold text-5xl'>8239</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight font-semibold text-xs tracking-[0.3em]'>SUBSCRIBERS</p>
                                </div>
                                <div className='flex justify-center mt-4 mb-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowDown} alt="Down Arrow" />
                                    <p className='textRed text-sm font-bold'>144 Today</p>
                                </div>
                            </div>
                        </div>

                        <p className='textLight font-bold text-2xl mt-14'>Overview - Today</p>

                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
