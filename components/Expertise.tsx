import React from "react";

type Props = {};

function Expertise({}: Props) {
  return (
    <div className="pt-20 flex flex-col items-center">
      <h2 className="uppercase tracking-[20px] text-center">Expertise</h2>
      <div className="flex flex-col w-[390px] md:w-[900px] md:flex-wrap lg:flex-nowrap md:flex-row pt-10 lg:w-[1024px] justify-center">
        <div className="square">
          <div className="content">
            <div className="flex items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-20 h-auto mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <h3 className="z-[0]">
                <span className="chonky-underline-pink">Software</span>
                Development
              </h3>
            </div>
            <div className="paragraph-tag">
              <p className="pl-[35px]">
                Experienced in software architecture and building scalable
                projects. Fluent in multiple programming languages.
              </p>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="content">
            <div className="flex items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-20 h-auto mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <h3 className="z-[0]">
                <span className="chonky-underline-purple">Frontend Dev</span>{" "}
                React, Next.js
              </h3>
            </div>
            <div className="paragraph-tag">
              <p className="pl-[35px]">
                Passionate about UI/UX and building cool websites with great
                designs. Experienced in HTML, CSS, JS as well as React and Next
                frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="square">
          <div className="content">
            <div className="flex items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-20 h-auto mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <h3 className="z-[0]">
                <span className="chonky-underline-blue">Web3</span> Development
              </h3>
            </div>
            <div className="paragraph-tag">
              <p className="pl-[35px]">
                Web3 technology powered by the Ethereum network. Passionate
                about bridging the gap between web2 and web3 and spreading
                awareness.
              </p>
            </div>
          </div>
        </div>
        <div className="square hidden md:block lg:hidden border-0 border-t-2 border-l-2">
          <div className="absolute top-0 left-0 px-8 h-full w-full flex flex-col justify-center items-center overflow-hidden">
            <h3 className="pl-[25px] after:absolute after:border-yellow-500 after:border-4 after:h-[50%] after:left-[7%] after:top-[26%]">
              This is here to maintain responsiveness!
            </h3>
          </div>
        </div>
      </div>
      <div className="mb-20 mt-[-25px]">
        <img
          src="/background.png"
          alt=""
          className="opacity-30 w-full md:w-[600px] lg:w-[700px]"
        />
      </div>
    </div>
  );
}

export default Expertise;
