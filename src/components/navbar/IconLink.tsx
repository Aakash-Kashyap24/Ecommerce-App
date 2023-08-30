import React from 'react';
import { LinkedIn, Twitter } from '@mui/icons-material';

interface IconLinkProps {
    icon: React.ReactNode; // Accepts any React node as icon
    link: string;
}

const IconLink: React.FC<IconLinkProps> = ({ icon, link }) => {
    return (
        <div>
            <a href={link}>
                {icon}
            </a>
        </div>
    );
}

export default IconLink;
