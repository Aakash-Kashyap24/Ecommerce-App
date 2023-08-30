import React from 'react';
import { TextField, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import logo from '../../../public/logo_medium.png'
const NewsLetter = () => {
  return (
    <div className='flex flex-col gap-2'>
        <br className="hidden md:block" />

        <div className="flex w-[75px] mx-auto">
            <Image src={logo} alt="" />
        </div>
        <br />
<span className='text-center text-[14px] md:text-[16px]'>
Time to shop! Find your favorite product, check the latest collection & don’t miss out the best siscounts with Letta!
</span>
<br />
<br className='hidden md:block' />
        <span className='text-[15px] font-bold'>NEWSLETTER</span>
      <TextField
        variant="outlined"
        placeholder="Enter your email"
        InputProps={{
          endAdornment: (
            <IconButton>
              <EmailIcon />
            </IconButton>
          ),
        }}
        style={{ marginBottom: '16px' }}
      />
      <div className='flex gap-2 '>
        <Link href="https://github.com" className='text-black' target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </Link>
        <Link href="https://linkedin.com" className='text-black' target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </Link>
        <Link href="https://twitter.com" className='text-black' target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
}

export default NewsLetter;
