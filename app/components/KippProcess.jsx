import * as React from "react";

export default function KippProcess() {
    const data = [
        {
            heading: 'Discovery & Consultation',
            description: 'Our discovery call system provides a quick 30-minute consultation to tailor our AI solutions to your legal practices needs.'
        },
        {
            heading: 'Bespoke strategy',
            description: 'Our bespoke strategy involves customizing AI solutions to fit the unique requirements of your legal practice, ensuring optimal efficiency and effectiveness.'
        },
        {
            heading: 'Deployment & Integration',
            description: 'Our deployment and integration process seamlessly incorporates tailored AI solutions into your legal practices existing systems for immediate productivity gains.'
        }

    ]
    return (
        <div className="flex flex-col pt-4 bg-[#1E1E1E] pt-20">
            <div className="flex overflow-hidden relative flex-col gap-5 items-start px-16 pb-20 w-full fill-[radial-gradient(32.91%_32.91%_at_51.94%_34.46%,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.14)_43.89%,rgba(255,255,255,0.00)_100%)] bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] min-h-[551px] max-md:flex-wrap max-md:px-5 max-md:w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d4ffd172966dfb4fcb370cede9b076be7195d867699523d36ecec9a844c1ee6?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="object-cover absolute inset-0 size-full"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b44dd8f083c70f8a9118a0d4f7d9c19c900156316f8f0a47af0fa2a3f39af69f?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="shrink-0 -mt-4 max-w-full aspect-[1.05] w-[100px]"
                />
                <div className="flex relative flex-col grow shrink-0 mt-1.5 basis-0 w-fit w-full">
                    <div className="flex flex-col self-center max-w-full w-[478px] justify-center">
                        <div className="self-center text-4xl md:text-5xl font-bold tracking-tighter text-white capitalize leading-[57.2px]">
                            Our <span className="text-white bg-[#7A63FF] px-2 py-1 rounded-md">KIPP process</span>
                        </div>
                        <div className="mt-4 text-base font-light leading-7 text-center text-gray-200 max-md:max-w-full">
                            The KIPP Method Our streamlined approach to achieving
                            success and growth.
                        </div>
                    </div>
                    <div className="w-full" style={{marginTop: "-50px"}}>
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-w-[1100px] justify-center items-center mx-auto">
                            {
                                data.map((Item, index) => (
                                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col justify-center text-base leading-7 capitalize text-neutral-300">
                                        <div className="text-9xl font-semibold bg-clip-text bg-[linear-gradient(90deg,#7A63FF_3.56%,#9B93E9_106.6%)] leading-[180px] max-w-[117px] text-[#7A63FF] absolute">0{index+1}</div>
                                        <div className="justify-center px-5 py-6 mt-48 rounded-xl border border-solid backdrop-blur bg-white bg-opacity-0 border-sky-100 border-opacity-10"> <span className="text-white block text-xl mb-3">{Item.heading}</span>{Item.description}</div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

