import React, { useState } from 'react';
import facebook from '../prefabs/images/icon-facebook.svg';
import insta from '../prefabs/images/icon-instagram.svg';
import twit from '../prefabs/images/icon-twitter.svg';
import yuochube from '../prefabs/images/icon-youtube.svg';
import arrowUp from '../prefabs/images/icon-up.svg';
import arrowDown from '../prefabs/images/icon-down.svg';
import { Flowbite, ToggleSwitch } from 'flowbite-react';
import { customSwitch } from '../interfaces';

const MainComponent = () => {
    const [darkSwitch, setDarkSwitch] = useState<string>("light");
    const [switch1, setSwitch1] = useState(true);

    const switchMode = () => {
        if (switch1 === true) {
            setDarkSwitch("dark");
            setSwitch1(false);
        } else {
            setDarkSwitch("light");
            setSwitch1(true);
        }
    }

    return (
        <div className={darkSwitch} >
            <div className='dark:bg-[#1e202a] min-h-screen h-full'>
                <div className='z-10 absolute bg-[#f5f7ff] dark:bg-[#1f212e] h-[16rem] lg:h-[15rem] w-screen inter rounded-b-xl'></div>
                <div className='z-20 relative flex justify-center lg:pb-20'>
                    <div className='w-[88%] lg:w-4/5'>
                        <div className='lg:flex lg:justify-between'>
                            <div>
                                <p className='mt-10 lg:mb-1 textStandard dark:text-white text-[25px] lg:text-3xl lg:text-[29px] font-bold'>Social Media Dashboard</p>
                                <p className='text-sm text-[14.5px] tracking-wide textLight dark:text-[#8b97c6] font-bold'>Total Followers: 23,004</p>
                            </div>

                            <div className='visible mt-6 lg:hidden'>
                                <hr className='border-[#63687e]' />
                            </div>

                            <div className='mt-5 mb-11 lg:mb-0 lg:mt-[52px] flex justify-between lg:justify-normal'>
                                <p className='font-bold textLight mr-3 text-base dark:text-[#8b97c6]'>Dark Mode</p>
                                <div>
                                    <Flowbite theme={{ theme: customSwitch }}>
                                        <ToggleSwitch checked={switch1} onChange={switchMode} />
                                    </Flowbite>
                                </div>
                            </div>
                        </div>


                        <div className='lg:flex lg:justify-between lg:gap-x-[2.8%] lg:mt-10'>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-6 pb-1 lg:mb-0 lg:pb-0 bg-[#f0f2fa] w-full rounded-b-lg rounded-t-[5px]'>
                                <div className='flex justify-center '>
                                    <div className='w-[100%] h-[4px] bg-[#198ff5] rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={facebook} alt="Facebook Logo" />
                                    <p className='textLight font-bold text-sm dark:text-[#8b97c6]'>@nathanf</p>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <p className='textStandard font-bold text-5xl dark:text-white'>1987</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight text-xs tracking-[0.3em] dark:text-[#8b97c6]'>FOLLOWERS</p>
                                </div>
                                <div className='flex justify-center my-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                    <p className='textGreen dark:text-white lg:dark:textGreen text-sm font-bold'>12 Today</p>
                                </div>
                            </div>

                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-6 pb-1 lg:mb-0 lg:pb-0 bg-[#f0f2fa] w-full rounded-b-lg rounded-t-[5px]'>
                                <div className='flex justify-center '>
                                    <div className='w-full h-[4px] bg-[#1ca0f2] rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={twit} alt="Twitter Logo" />
                                    <p className='textLight font-bold text-sm dark:text-[#8b97c6]'>@nathanf</p>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <p className='textStandard font-bold text-5xl dark:text-white'>1044</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight text-xs tracking-[0.3em] dark:text-[#8b97c6]'>FOLLOWERS</p>
                                </div>
                                <div className='flex justify-center my-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                    <p className='textGreen text-sm font-bold'>99 Today</p>
                                </div>
                            </div>

                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-6 pb-1 lg:mb-0 lg:pb-0 bg-[#f0f2fa] w-full rounded-b-lg rounded-t-[5px]'>
                                <div className='flex justify-center '>
                                    <div className='w-[100%] h-[4px] instaGrad rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={insta} alt="Instagram Logo" />
                                    <p className='textLight font-bold text-sm dark:text-[#8b97c6]'>@realnathanf</p>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <p className='textStandard font-bold text-5xl dark:text-white'>11k</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight text-xs tracking-[0.3em] dark:text-[#8b97c6]'>FOLLOWERS</p>
                                </div>
                                <div className='flex justify-center my-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                    <p className='textGreen text-sm font-bold'>1099 Today</p>
                                </div>
                            </div>

                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-6 pb-1 lg:mb-0 lg:pb-0 bg-[#f0f2fa] w-full rounded-b-lg rounded-t-[5px]'>
                                <div className='flex justify-center '>
                                    <div className='w-[100%] h-[4px] bg-[#c4032a] rounded-t-3xl'></div>
                                </div>
                                <div className='flex justify-center mt-7'>
                                    <img className='w-5 h-5 mr-2' src={yuochube} alt="Youtube Logo" />
                                    <p className='textLight font-bold text-sm dark:text-[#8b97c6]'>Nathan F.</p>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <p className='textStandard font-bold text-5xl dark:text-white'>8239</p>
                                </div>
                                <div className='flex justify-center mt-1'>
                                    <p className='textLight text-xs tracking-[0.3em] dark:text-[#8b97c6]'>SUBSCRIBERS</p>
                                </div>
                                <div className='flex justify-center my-6'>
                                    <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowDown} alt="Down Arrow" />
                                    <p className='textRed text-sm font-bold'>144 Today</p>
                                </div>
                            </div>
                        </div>

                        <p className='textLight dark:text-white font-bold text-[25px] mt-12 lg:mt-14'>Overview - Today</p>

                        <div className='lg:flex lg:justify-between lg:gap-x-[2.8%] mt-6'>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm tracking-tight dark:text-[#8b97c6]'>Page Views</p>
                                    <img className='w-5 h-5' src={facebook} alt="Facebook Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white'>87</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                        <p className='textGreen text-sm font-bold tracking-tight'>3%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm tracking-tight dark:text-[#8b97c6]'>Likes</p>
                                    <img className='w-5 h-5' src={facebook} alt="Facebook Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white'>52</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowDown} alt="Down Arrow" />
                                        <p className='textRed text-sm font-bold tracking-tight'>2%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm dark:text-[#8b97c6]'>Likes</p>
                                    <img className='w-5 h-5' src={insta} alt="Facebook Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl tracking-tight dark:text-white'>5462</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                        <p className='textGreen text-sm tracking-tight font-bold'>2257%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm tracking-tight dark:text-[#8b97c6]'>Profile Views</p>
                                    <img className='w-5 h-5' src={insta} alt="Facebook Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white'>52k</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                        <p className='textGreen text-sm font-bold tracking-tight'>1375%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex lg:justify-between lg:gap-x-[2.8%] mt-4 lg:mt-6'>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm tracking-tight dark:text-[#8b97c6]'>Retweets</p>
                                    <img className='w-5 h-5' src={twit} alt="Twitter Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white'>117</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                        <p className='textGreen text-sm font-bold tracking-tight'>303%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm tracking-tight dark:text-[#8b97c6]'>Likes</p>
                                    <img className='w-5 h-5' src={twit} alt="Twitter Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white'>507</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowUp} alt="Up Arrow" />
                                        <p className='textGreen text-sm font-bold tracking-tight'>553%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-4 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm dark:text-[#8b97c6]'>Likes</p>
                                    <img className='w-5 h-5' src={yuochube} alt="Youtube Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white tracking-tight'>107</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowDown} alt="Down Arrow" />
                                        <p className='textRed text-sm tracking-tight font-bold'>19%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hober dark:darkHober dark:bg-[#252a41] mb-14 lg:mb-0 pt-1 lg:pt-0 bg-[#f0f2fa] w-full rounded-lg pb-7'>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textLight text-sm tracking-tight dark:text-[#8b97c6]'>Total Views</p>
                                    <img className='w-5 h-5' src={yuochube} alt="Youtube Logo" />
                                </div>
                                <div className='flex justify-between mx-9 mt-6'>
                                    <p className='font-bold textStandard text-4xl dark:text-white'>1407</p>
                                    <div className='flex mt-5'>
                                        <img className='w-[8px] h-[4px] mt-[9px] mr-[4px]' src={arrowDown} alt="Down Arrow" />
                                        <p className='textRed text-sm font-bold tracking-tight'>12%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainComponent
