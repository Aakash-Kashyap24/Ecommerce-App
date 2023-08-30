import React from "react";
import { Link } from "@mui/material";
import { LinkedIn, Twitter,GitHub } from '@mui/icons-material';
import IconLink from "./IconLink";

const UpperHeader=()=>{

    return(
        <div className=" justify-center h-auto gap-[25px] sm:justify-between items-center flex max-w-[1100px] m-auto  text-white">
         <span className="text-[14px] text-center">Free worldwide shipping until further notice.</span>
       <div className="hidden sm:flex  items-center  gap-5">

         <div className="flex items-center gap-3 text-white">

          <Link href="/login" className="text-white">
          Sign In
          </Link>
          <span>
            /
          </span>
          <Link href="/login" className="text-white">

          Register
          </Link>
         </div>
         <div className="icons flex items-center gap-4">
         <IconLink
                icon={<GitHub sx={{height:"20px"}} />}
                link="https://github.com/"
            />
         <IconLink
                icon={<LinkedIn sx={{height:"20px"}} />}
                link="https://www.linkedin.com/"
            />
            <IconLink
                icon={<Twitter sx={{height:"20px"}} />}
                link="https://twitter.com/"
            />
         </div>
       </div>

        </div>
    )
}

export default  UpperHeader;