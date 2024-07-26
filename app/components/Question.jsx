import { useState } from "react";
import QuestionComponent from "./questionComponent";

export default function Questions() {
  const [generalQuestionOpen, setGeneralQuestionOpen] = useState({ 1: false, 2: true, 3: false });
  const [generalQuestions, setGeneralQuestions] = useState([
    {
      title: "What Is Kipp?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "How Can Kipp Help My Practice?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "What Industries Do You Serve?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
  ])
  const [pricingQuestionOpen, setPricingQuestionOpen] = useState({ 1: false, 2: false, 3: false });
  const [pricingQuestions, setPricingQuestions] = useState([
    {
      title: "How Is Pricing Determined For Your Solutions?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "Do You Offer Any Free Trials Or Demos?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "What Payment Methods Do You Accept?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
  ])
  const [productQuestionOpen, setProductQuestionOpen] = useState({ 1: false, 2: false, 3: false });
  const [productQuestions, setProductQuestions] = useState([
    {
      title: "What AI Solutions Do You Offer?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "Can Your Solutions Be Customized For My Specific Needs?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "What Kind Of Support Do You Provide?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
  ])
  const [securityQuestionOpen, setSecurityQuestionOpen] = useState({ 1: false, 2: false, 3: false });
  const [securityQuestions, setSecurityQuestions] = useState([
    {
      title: "How Do You Ensure The Security Of Your Solutions?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "My Data Kept Confidential?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "How Can I Get Started With Kipp?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
    {
      title: "What Is The Implementation Process Like?",
      description: "Our AI Solutions Can Automate Routine Tasks, Reduce Errors, Improve Decision-Making, And Ultimately Save Time And Money For Your Practice."
    },
  ])

  return (
    <div className="pb-20 flex flex-col bg-[linear-gradient(0deg,#1E1E1E_70%,#282637_96.5%,#282637_100%)]">
      <div className="flex flex-col self-center max-w-full w-[528px] mb-16">
        <div className="text-[33px] md:text-[35px] font-bold bg-clip-text md:leading-[55px] max-w-[1300px] max-md:leading-[45px] text-white mx-5 w-[100%]">
          <p className='text-center'>
            Frequently Asked <span className="bg-[#7A63FF] px-2 py-1 rounded-md">Questions</span>
          </p>
        </div>
        <div className="mt-4 text-base px-2 font-light leading-7 text-center text-gray-200 max-md:max-w-full">
          Need help with a question? Our 24/7 assistant, located at the bottom
          right of your screen, is here to assist you with any inquiries or
          issues you may have                </div>
      </div>
      <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-w-[1050px] m-auto">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col capitalize max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col px-5 max-md:max-w-full">
                <div className="text-2xl font-medium leading-8 text-white max-md:max-w-full">
                  General Questions
                </div>
                <QuestionComponent questions={generalQuestions} questionBoolean={generalQuestionOpen} setQuestionBoolean={setGeneralQuestionOpen} />
              </div>
              <div className="flex flex-col px-5 mt-8 font-medium max-md:max-w-full">
                <div className="text-2xl leading-8 text-white max-md:max-w-full">
                  Pricing and Payment
                </div>
                <QuestionComponent questions={pricingQuestions} questionBoolean={pricingQuestionOpen} setQuestionBoolean={setPricingQuestionOpen} />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-medium capitalize max-md:mt-8 max-md:max-w-full">
              <div className="flex flex-col px-5 max-md:max-w-full">
                <div className="text-2xl leading-8 text-white max-md:max-w-full">
                  Product and Services
                </div>
                <div className="relative">
                <QuestionComponent questions={productQuestions} questionBoolean={productQuestionOpen} setQuestionBoolean={setProductQuestionOpen} />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/104370ddca7a62f15fe302086682fef2a2d9e30450e8f2a2dbc09d6b6f744d98?apiKey=cf358c329e0d49a792d02d32277323ef&"
                    className="self-end absolute aspect-[0.97] w-[92px] top-[190px] right-[-130px] hidden md:block"
                />
                </div>
              </div>
              <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                <div className="text-2xl leading-8 text-white max-md:max-w-full">
                  Security and Privacy
                </div>
                <QuestionComponent questions={securityQuestions} questionBoolean={securityQuestionOpen} setQuestionBoolean={setSecurityQuestionOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

