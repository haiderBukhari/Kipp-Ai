import * as React from "react";

export default function Services() {
    return (
        <div className="flex flex-col self-center justify-center w-full bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] pt-36 pb-20">
            <div className="flex flex-col self-center max-w-full w-[528px]">
                <div className="text-[33px] md:text-[35px] font-bold bg-clip-text md:leading-[55px] max-w-[700px] max-md:leading-[47px] text-white mx-5 pb-2">
                    <p className='text-center'>
                        Our <span className="bg-[#7A63FF] rounded-md px-2 py-1">Services</span> <br />
                    </p>
                </div>
                <div className="mt-4 text-base font-light leading-7 text-center text-gray-200 max-md:max-w-full">
                    Select the Ideal Package Tailored to Meet Your Legal Practice’s Needs
                    and Goals
                </div>
            </div>
            <div className="mt-11 max-md:pr-5 max-md:mt-10 max-md:max-w-[400px] mx-2 md:mx-20">
                <div className="flex gap-5 max-md:flex-col justify-center max-md:gap-0">
                    <div className="flex flex-col w-[300px] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 py-8 w-full capitalize rounded-2xl border border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-white border-opacity-10 max-md:mt-8">
                            {/* <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a2fdf7a9cf68922dbd6becca9adb06c6094943f784b6c091a538ffed88d7a72?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                className="self-center w-16 aspect-square"
                            /> */}
                            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-solid backdrop-blur bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-slate-800 min-h-[64px] stroke-[1px] mx-auto" >
                                <div className="flex flex-col items-center justify-center max-w-[28px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85026cd6f80e5a958fa6644b2c4f7291252366fabf809bb3282074479e418c69?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="w-full aspect-[0.93] fill-[#7a63ff]"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col mt-3">
                                <div className="self-center text-xl font-medium leading-8 text-right text-white">
                                    Chatbots
                                </div>
                                <div className="mt-2 text-sm leading-6 text-center text-neutral-300">
                                    Support, onboarding and training
                                    chatbots, custom built and trained on your information
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[300px] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 py-8 w-full capitalize rounded-2xl border border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-white border-opacity-10 max-md:mt-8">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-solid backdrop-blur bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-slate-800 min-h-[64px] stroke-[1px] mx-auto" >
                                <div className="flex flex-col items-center justify-center max-w-[28px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbecca9dbf7a23a73995784f8715304bf6a345ea78ebef93fef83c6731e0539b?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="w-full aspect-[0.93] fill-[#7a63ff]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mt-3">
                                <div className="self-center text-xl font-medium leading-8 text-right text-white">
                                    Automations
                                </div>
                                <div className="mt-2 text-sm leading-6 text-center text-neutral-300">
                                    Client delivery automations, lead
                                    generation & lead management
                                    automations
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[300px] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 py-8 w-full capitalize rounded-2xl border border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-white border-opacity-10 max-md:mt-8">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-solid backdrop-blur bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-slate-800 min-h-[64px] stroke-[1px] mx-auto" >
                                <div className="flex flex-col items-center justify-center max-w-[28px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/03405450d5bcb4e3f29827627b1987a51a45e420115989913a47280e73a25690?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="w-full aspect-[0.93] fill-[#7a63ff]"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mt-3">
                                <div className="self-center text-xl font-medium leading-8 text-right text-white">
                                    Workflows
                                </div>
                                <div className="mt-2 text-sm leading-6 text-center text-neutral-300">
                                    We build robust workflows that
                                    <br />
                                    integrate into your sales process, and business.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[300px] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 py-8 w-full capitalize rounded-2xl border border-solid bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-white border-opacity-10 max-md:mt-8">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-solid backdrop-blur bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-slate-800 min-h-[64px] stroke-[1px] mx-auto" >
                                <div className="flex flex-col items-center justify-center max-w-[28px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9c16b8c2aa23acc8575e5ce569520f554af9f358b525839748ecbd31a3089a?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                        className="w-full aspect-[0.93] fill-[#7a63ff]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mt-3">
                                <div className="self-center text-xl font-medium leading-8 text-right text-white">
                                    Custom Platforms
                                </div>
                                <div className="mt-2 text-sm leading-6 text-center text-neutral-300">
                                    Our skilled team of developers can build custom platforms for
                                    our clients, the sky is the limit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&"
                className="self-end aspect-[0.97] w-[92px] hidden md:block"
            />
        </div>
    );
}

