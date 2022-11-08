import React from 'react';
import {
  footerList1,
  footerList2,
  footerList3,
} from '../../utils/constants/constants';
interface Props {
  items: string[];
  mt: boolean;
}
const List = ({ items, mt }: Props) => (
  <div className={`flex flex-wrap gap-2  ${mt && 'mt-4'}`}>
    {items.map((item) => (
      <h1
        className="  text-gray-700 hover:underline cursor-pointer"
        key={item}
      >
        {item}
      </h1>
    ))}
  </div>
);
const Footer = () => {
  return (
    <div className="xl:block hidden">
      {/* //Todo: margin top cancel on first listing */}
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
    </div>
  );
};

export default Footer;
