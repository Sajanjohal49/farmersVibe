import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './navbar.module.css';

import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo_1 from '../../utils/images/farm-c.png';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="flex items-center">
          <div className=" w-[75px]">
            <Image
              className=" "
              src={Logo_1}
              alt="farmersVibe"
              layout="responsive"
            />
          </div>
          <main className=" ">
            <p className="font-bold text-3xl font-sans text-green-700">
              {' '}
              FARMERS VIBE
            </p>
          </main>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
