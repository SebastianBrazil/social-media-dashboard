import React from 'react';
import facebook from '../prefabs/images/icon-facebook.svg';
import insta from '../prefabs/images/icon-instagram.svg';
import twit from '../prefabs/images/icon-twitter.svg';
import yuochube from '../prefabs/images/icon-youtube.svg';
import arrowUp from '../prefabs/images/icon-up.svg';
import arrowDown from '../prefabs/images/icon-down.svg';

const MainComponent = () => {
    return (
        <div className='bg-[#f5f7ff] h-64 w-screen'>
            <div className='flex justify-center'>
                <div className='w-4/5'>
                    <p className='mt-8 textStandard text-2xl inter font-bold'>Social Media Dashboard</p>
                    <p className='text-[12px] tracking-wide textLight font-bold inter'>Total Followers: 23,004</p>

                    <div className='flex justify-between mt-10'>
                        <div className='bg-[#f0f2fa] w-[265px] rounded-xl'>
                            <div className='flex justify-center w-full h-[3px] bg-[#198ff5] rounded-t-xl'></div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <p>1987</p>
                            </div>
                            <div className='flex justify-center'>
                                <p>FOLLOWERS</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={arrowUp} alt="Facebook Logo" />
                                <p>12 Today</p>
                            </div>
                        </div>

                        <div className='bg-[#f0f2fa] w-[265px]'>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <p>1987</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                        </div>

                        <div className='bg-[#f0f2fa] w-[265px]'>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <p>1987</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                        </div>

                        <div className='bg-[#f0f2fa] w-[265px]'>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <p>1987</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                            <div className='flex justify-center'>
                                <img src={facebook} alt="Facebook Logo" />
                                <p>@nathanf</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
