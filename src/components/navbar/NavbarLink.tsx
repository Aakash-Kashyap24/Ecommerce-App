'use client'

import React from 'react';
import { Typography, Link } from '@mui/material';
import { usePathname} from 'next/navigation';

interface NavbarLinkProps {
  title: string;
  link: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ title, link }) => {
  const isActive = usePathname() === link;
//   const isActive =true;
  return (
    <Typography
      variant="h6"
      className={`transition text-[15px] font-bold uppercase duration-100 ease-in-out ${isActive ? 'text-blue-800' : 'hover:text-red-600'}`}
      component="div"
      
    >
      <Link href={link} color="inherit" underline="none">
        {title}
      </Link>
    </Typography>
  );
};

export default NavbarLink;
