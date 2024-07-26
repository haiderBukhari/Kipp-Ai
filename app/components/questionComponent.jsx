import React from 'react'

const QuestionComponent = ({ questions, questionBoolean, setQuestionBoolean }) => {
    return (
        <div className='flex flex-col mt-6 max-md:max-w-full'>
            {
                questions.map((Item, index) => (
                    <div onClick={() => { setQuestionBoolean({ ...questionBoolean, [index + 1]: !questionBoolean[index + 1] }) }} key={index} className={`flex flex-col px-4 py-3 mt-4 rounded-lg border border-solid max-md:max-w-full ${questionBoolean[index + 1] ? 'bg-[linear-gradient(180deg,#1E1E1E_0%,#282637_96.5%,#282637_100%)] border-violet-500' : 'bg-neutral-800 border-none'}`}>
                        <div className="flex gap-4 justify-between text-lg font-medium leading-7 text-white max-md:flex-wrap max-md:max-w-full">
                            <div>{Item.title}</div>
                            {
                                questionBoolean[index + 1] ? <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/adaf69955d1b0c85bf38e2d81d8dbf6c8cfa6562a2437cc87702c7104ea5a993?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-8 aspect-square"
                                /> : <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fc185fd7e3d53ea77956c0d8a1964f3179fd37c39152c1393d4c6ac37844b28?apiKey=cf358c329e0d49a792d02d32277323ef&"
                                    className="shrink-0 w-8 aspect-square"
                                />
                            }
                        </div>
                        {
                            questionBoolean[index + 1] && <div className="mt-4 text-base leading-7 text-neutral-300 max-md:max-w-full">
                                {Item.description}
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionComponent