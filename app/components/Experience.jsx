// import VideoFrame from '../../public/'

export default function Experience() {
    return (
        <div className='flex flex-col relative justify-center items-center pt-10 md:pt-32 bg-[#1E1E1E]'>
            <div className="text-[33px] md:text-[35px] font-bold bg-clip-text md:leading-[55px] max-w-[700px] max-md:leading-[47px] text-white mx-5">
                <p className='text-center'>
                    Let AI Assist on Routine Tasks So You Can Focus on <span className="bg-[#7A63FF] px-2 py-1 rounded-md">Legal Expertise</span> <br />
                </p>
            </div>
            <p className='max-w-[600px] text-[#E9E9EA] text-center mt-4 text-[16px] leading-[25px]'>Our Custom AI Solutions are designed to elevate your practice by enhancing productivity, reducing costs,and increasing customer engagement</p>
            <div className="flex justify-center pb-1 w-full rounded-3xl mt-8 h-[auto]  sm:max-w-full mx-4">
                <div className="max-w-[700px] max-h-[300px] w-full h-[100%]" style={{
                    position: 'relative', height: 0, paddingTop: '30.2500%',
                    paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em',
                    marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform', width: "100%"
                }}>
                    <iframe loading="lazy" style={{
                        position: 'absolute', width: '100%', height: '100%', top: 0,
                        left: 0, border: 'none', padding: 0, margin: 0
                    }} src="https://www.canva.com/design/DAGCs9ZUn4g/wKfst16MeINGR-vKOJyjfQ/watch?embed" allowFullScreen="allowfullscreen" allow="fullscreen" controls={false} autoPlay muted>
                    </iframe>
                </div>

                {/* <a href="https://www.canva.com/design/DAGCs9ZUn4g/wKfst16MeINGR-vKOJyjfQ/watch?utm_content=DAGCs9ZUn4g&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">[Original size] Transforming Legal Practices with AI</a> */}

                {/* <video src='https://www.canva.com/design/DAGCs9ZUn4g/wKfst16MeINGR-vKOJyjfQ/watch?embed'></video> */}
                {/* <video style={{height: "40px"}} src='https://canva.com/design/DAGCs9ZUn4g/wKfst16MeINGR-vKOJyjfQ/watch?utm_content=DAGCs9ZUn4g&utm_campaign=designshare&utm_medium=embeds&utm_source=link'></video> */}
                {/* <img
                    loading="lazy"
                    src="assets/videoFrame.png"
                    className="h-[100%] w-full md:w-[80%]"
                    alt=''
                /> */}
            </div>
            <img
                loading="lazy"
                src='assets/icon.png'
                className="absolute bottom-0 left-[30px] hidden md:block aspect-[1.05] w-[60px]"
                alt=""
            />
        </div>
    )
}