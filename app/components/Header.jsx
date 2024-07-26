import Link from 'next/link';

export default function Header({ show, setShow }) {
    return (
        <div style={{ zIndex: 20 }} className={`flex relative justify-start md:justify-center items-start md:items-center md:px-16 py-4 w-full border-b border-solid backdrop-blur-[2px] bg-[linear-gradient(180deg,#1E1E1E_20%,#282637_96.5%,#282637_100%)] z-4 border-gray-200 border-opacity-10 max-md:px-5 max-md:max-w-full md:pl-24 md:pr-20 ${show && 'h-screen overflow-hidden'} md:h-auto md:overflow-auto`}>
            <div className="mt-3 flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
                <a href="/" className="flex justify-center items-center my-auto">
                    <img
                        loading="lazy"
                        src='assets/Logo.png'
                        className="aspect-[5] w-[173px]"
                        alt=""
                    />
                </a>
                <div className="flex gap-5 justify-between text-base text-right max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-2.5 font-medium text-white">
                        <a href="https://app.apollo.io/#/meet/khb-lec-ve6/30-min" className="justify-center px-8 py-3.5 bg-[linear-gradient(90deg,#7A63FF_3.56%,#9B93E9_106.6%)] rounded-[50px] max-md:px-5 cursor-pointer">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="w-full md:hidden">
                <div className="md:hidden flex flex-col w-full items-start text-base leading-6 text-right capitalize whitespace-nowrap text-neutral-300 relative">
                    <div className="flex justify-between w-full my-auto">
                        <img
                            loading="lazy"
                            src='assets/Logo.png'
                            className="aspect-[5] w-[173px]"
                            alt=""
                        />
                        {
                            show ? <img
                                loading="lazy"
                                onClick={() => { setShow(!show) }}
                                src='assets/cross.png'
                                className="aspect-[5] w-[30px] h-[30px]"
                                alt=""
                            /> : <img
                                loading="lazy"
                                onClick={() => { setShow(!show) }}
                                src='assets/menu.png'
                                className="aspect-[5] w-[30px] h-[30px]"
                                alt=""
                            />
                        }
                    </div>
                    {
                        show &&
                        <>
                        </>
                    }
                </div>
                {
                    show &&
                    <div className="md:hidden flex flex-col gap-2.5 font-medium text-white absolute bottom-[20px] w-full">
                        <a href="https://app.apollo.io/#/meet/khb-lec-ve6/30-min" legacyBehavior>
                            <a className="justify-center py-3.5 bg-[linear-gradient(90deg,#7A63FF_3.56%,#9B93E9_106.6%)] rounded-[50px] max-md:px-5 cursor-pointer w-[90%] text-center">
                                Sign Up
                            </a>
                        </a>
                    </div>
                }
            </div> */}
        </div>
    );
}

