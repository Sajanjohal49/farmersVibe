import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { topics } from '../../utils/constants/constants';

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;
  console.log(router);
  const divStyle = 'xl:flex   flex-wrap';
  const normalStyle =
    'flex items-center gap-2 my-3 xl:border-2 border-green-700 mx-1 xl:px-3 py-1 rounded-3xl text-green-800 font-medium';
  const activeStyle =
    'flex items-center gap-2 my-3 xl:border-2 border-green-700 mx-1 xl:px-3 py-1 rounded-3xl text-white font-medium bg-green-700';
  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-4  ">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Popular Topics
      </p>
      <div className={divStyle}>
        {topics.map((item) => (
          <Link href={`?topic=${item.name}`} key={item.name}>
            <div
              className={
                topic === item.name ? activeStyle : normalStyle
              }
            >
              <span className="text-2xl mx-auto">{item.icon}</span>
              <span className="xl:block hidden capitalize">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
