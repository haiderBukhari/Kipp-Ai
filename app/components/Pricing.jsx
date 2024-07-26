'use client'

import * as React from "react";

export default function Pricing() {
    return (
        <div className="flex flex-col justify-center items-center w-[100%] pt-20 bg-[linear-gradient(0deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)]">
            <div className="flex flex-col self-center max-w-full w-[528px] mb-16">
                <div className="text-[33px] md:text-[35px] font-bold bg-clip-text md:leading-[55px] max-w-[700px] max-md:leading-[47px] text-white mx-5 hidden md:block">
                    <p className='text-center'>
                        Best Plans <span className="bg-[#7A63FF] px-2 py-1 rounded-md">For Everyone</span> <br />
                    </p>
                </div>

                <div className="text-[33px] md:text-[35px] font-bold bg-clip-text md:leading-[55px] max-w-[700px] max-md:leading-[47px] text-white mx-5 block md:hidden">
                    <p className='text-center'>
                        Best Plans <br /><span className="bg-[#7A63FF] px-2 py-1 rounded-md">For Everyone</span> <br />
                    </p>
                </div>
                
                <div className="mt-4 text-base font-light leading-7 text-center text-gray-200 max-md:max-w-full">
                    Select the Ideal Package Tailored to Meet Your Legal Practice’s Needs and Goals
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap max-w-[1300px]">
                <div className="flex flex-col flex-1 mx-3 grow p-6 rounded-2xl border border-solid bg-[#1E1E1E] border-white border-opacity-10 max-md:px-5 max-md:mt-8">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-start items-center p-2.5 border border-violet-500 border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] rounded-[50px] max-md:pr-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb34c1ee9025edbba9307a65fabcb7ea95ab22d442fa032820c8e8b1d76396b?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="w-7 aspect-square mr-2"
                                        />
                                        <div className="mt-3 text-2xl font-medium leading-6 text-violet-500 mb-2">
                                        Basic
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 capitalize">
                                    <div className="flex gap-1">
                                        <div className="text-3xl font-medium leading-10 text-white">
                                            $950.00
                                        </div>
                                        <div className="self-start mt-4 text-base leading-6 text-zinc-500">
                                            /per Month
                                        </div>
                                    </div>
                                    <div className="mt-1 text-base leading-6 text-white">
                                        Cancel Anytime
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-4 h-px bg-white bg-opacity-10" />
                        </div>
                        <div className="flex flex-col mt-6 text-base leading-6 text-white capitalize">
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6439e55983fc0fd285f51cfeb8ea5376ab9167735a7f0874d2961ad65247163c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Al Chatbot</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7797e42ae3568679081c958cff69b305bd88c74d7c7fb2656375f1da6e71aba9?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Full Access to APIs</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80315af3aa711ce7b0504fd33ecc7e3ee2f0816a10bb2690af0f0c36214e1d4d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Platforms</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c9f883e321c4c3406299f28545e010765f9be0eb2a88737d5f3ad0244c54fea?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom AlAssistant GPT</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e89c8af2e937bab88aca3587ddb3b9b50d335216b953bb494aaa666b01aa331?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>System Automations</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/39926720cba6d20dc0045a4bf16392bf8e4d6c1cac2f4aa60c5a49a8e86b28fc?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Workflows</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d7a13f304a478472b147282dbc017087bfe35236356a954550917128fae2d7a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Monthly Al Strategy Sessions</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/87b2619d909fa821c47303b33d38993936a05b31b759c755232b80ddb766b384?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Single User Access</div>
                            </div>
                        </div>
                    </div>
                        <a href="https://app.apollo.io/#/meet/khb-lec-ve6/30-min" className="justify-center items-center py-3.5 mt-8 text-base font-medium text-center text-white border border-violet-500 border-solid bg-white bg-opacity-0 rounded-[50px]">
                            Get Started Now
                        </a>
                </div>

                <div className="flex flex-col flex-1 mx-3 grow px-6 pb-6 w-full rounded-2xl border border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-white border-opacity-10 max-md:px-5 max-md:mt-8">
                    <div className="z-10 justify-center self-center px-3.5 py-1.5 -mt-4 text-base font-medium text-right text-white rounded-sm bg-[linear-gradient(90deg,#7A63FF_3.56%,#9B93E9_106.6%)] max-md:px-5">
                        Best Offer
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-start p-2.5 border border-violet-500 border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] rounded-[50px] max-md:pr-5 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2e7552fa828cb5f9c58045b1a5b5c475bb166c9986fe06b7373297febac181d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="shadow-xl aspect-[1.23] w-[26px] mr-2"
                                        />
                                        <div className="mt-3 text-2xl font-medium leading-6 text-violet-500 mb-2">
                                        Professional
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 capitalize">
                                    <div className="flex gap-1">
                                        <div className="text-3xl font-medium leading-10 text-white">
                                            $650.00
                                        </div>
                                        <div className="self-start mt-4 text-base leading-6 text-zinc-500">
                                            /6 Month
                                        </div>
                                    </div>
                                    <div className="mt-1 text-base leading-6 text-white">
                                        6 month Commitment
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-4 h-px bg-white bg-opacity-10" />
                        </div>
                        <div className="flex flex-col mt-6 text-base leading-6 text-white capitalize">
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c22e35bbddf5f9cf21c7b366cc2f7c2b4426373c7d58c23328b5b4c92d3cb44?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Al Chatbot</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f27797eaf2847d4c3b3769060975850ed2df61be91ea8cec80d9829dc8f4ce9f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Full Access to APIs</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c6cb7811bc63366ab0a5ab919275a35d7ddf1ab1d15055ee1f3b2c6df6fd752?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Platforms</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3395213f366055fb0c6833533632d1823ba6c65827185c19e8bd5833e7ef1a8d?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom AlAssistant GPT</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9c3e64d074bef9ac9d4332de3ddaccc0b1cefdf4d97aa3cc00139e09d48f0b?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>System Automations</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b83a97a2edc5647150a2c45bca6fa1d0a682a1b56e6c31d474947f2757e6efd?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Workflows</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db32e3bfb25be5e44057779eebd84f66b04bd55db46770ad27001e6585301865?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Monthly Al Strategy Sessions</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/963db6677a1ff2c4aaea1bc5ee4a7a97013ffe410af16b98b96c1246c2753950?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Unlimited User Access</div>
                            </div>
                        </div>
                    </div>

                    <a href="https://app.apollo.io/#/meet/khb-lec-ve6/30-min" className="justify-center items-center py-3.5 mt-8 text-base font-medium text-center text-white bg-[linear-gradient(90deg,#7A63FF_3.56%,#9B93E9_106.6%)] rounded-[50px]">
                        Get Started Now
                    </a>
                </div>

                <div className="flex flex-col flex-1 mx-3 grow p-6 rounded-2xl border bg-[#1E1E1E] border-solid border-white border-opacity-10 max-md:px-5 max-md:mt-8">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-start items-center px-2.5 py-2.5 border border-violet-500 border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] rounded-[50px] max-md:pr-5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46b1ee186639d267ed9f2d9cdd02291e288fc7039b9601c38030d2f18e224ec0?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                            className="w-4 aspect-[0.53] fill-[linear-gradient(90deg,#7A63FF_3.56%,#9B93E9_106.6%)] mr-2"
                                        />
                                        <div className="mt-3 text-2xl font-medium leading-6 text-violet-500 mb-2">
                                        Standard
                                    </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 capitalize">
                                    <div className="flex gap-1">
                                        <div className="text-3xl font-medium leading-10 text-white">
                                            $800.00
                                        </div>
                                        <div className="self-start mt-4 text-base leading-6 text-zinc-500">
                                            /3 Month
                                        </div>
                                    </div>
                                    <div className="mt-1 text-base leading-6 text-white">
                                        3 Month Commitment
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 mt-4 h-px bg-white bg-opacity-10" />
                        </div>
                        <div className="flex flex-col mt-6 text-base leading-6 text-white capitalize">
                            <div className="flex gap-2">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/97bf5c2b28e483240f7175ab26fb242b38da29d7d7a02b9df843c22dc3106570?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Al Chatbot</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f091de8975ccabb5f9cab6edc994add42a861f13c9b863ac3640a900ca0e5708?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Full Access to APIs</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c389838328af33af154a3a195c3070f876564b2abcad91ca23a582b11d6d6170?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Platforms</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4776ffc2b8af24ebda0e6e78dd44551c6d29552005a15062ab3eccd35a45f021?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom AlAssistant GPT</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7bca81c92338b50b0bdcfd2977578095f4fd77ff4a4c41506f27aa6f9e7684?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>System Automations</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/16fec2164d4169b05c00d5a3aceb4821b80a33c2fa083b0a2fa410f9d72efb25?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Custom Workflows</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/47def35352b6dd883c1070c1af1b3744696cf6f157db924bc04be638ebf1f75c?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Monthly Al Strategy Sessions</div>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa91f1ff26d29fad7db26dd92dde55c9d54a117271b1b60bdee2e84c14e5451?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 my-auto w-4 aspect-square"
                                />
                                <div>Single User Access</div>
                            </div>
                        </div>
                    </div>
                    <a href="https://app.apollo.io/#/meet/khb-lec-ve6/30-min" className="justify-center items-center py-3.5 mt-8 text-base font-medium text-center text-white border border-violet-500 border-solid bg-white bg-opacity-0 rounded-[50px]">
                        Get Started Now
                    </a>
                </div>
            </div>
        </div>

    );
}

