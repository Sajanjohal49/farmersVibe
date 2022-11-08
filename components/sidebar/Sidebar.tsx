import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { GoHome } from 'react-icons/go';
import Discover from '../discover/Discover';
import SuggestedAccounts from '../suggestedAccounts/SuggestedAccounts';
import Footer from '../footer/Footer';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const userProfile = false;
  return (
    <div className=" w-14 xl:w-[35%]  p-[0.15rem]  rounded-lg overflow-auto ">
      <div
        className=" block xl:hidden   text-green-700 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}

        // Todo: here I have use Prev instead of !showSidebar
      >
        {showSidebar ? (
          <ImCancelCircle className="mx-auto my-2 " />
        ) : (
          <AiOutlineMenu className="mx-auto my-2" />
        )}
      </div>
      {showSidebar && (
        <div className="  ">
          <div className="flex gap-4 m-3  ">
            <div className="  items-center w-full text-green-700  xl:px-3 xl:py-2 xl:border-b-2 xl:pb-4   ">
              <Link href="/" className="flex ">
                <GoHome className="xl:mr-2 text-2xl  " />
                <span className=" font-medium font-fancy xl:block hidden ">
                  For Every Farmer
                </span>
              </Link>
            </div>
          </div>
          {!userProfile && (
            <div className=" flex-col gap-4 m-3 hidden xl:block  ">
              <p className="">Like and comment on videos</p>
              <div>
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      className="bg-white text-lg text-green-600 font-semibold px-6 py-3 hover:bg-green-700 hover:text-white w-full border-2 border-green-700 rounded-xl "
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log in
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
