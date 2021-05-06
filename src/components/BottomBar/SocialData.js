import React from 'react';
import * as FaIcons from "react-icons/fa";
/* In order to add a new social media, copy the following example:
    
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/',
        icon: <FaIcons.FaLinkedin/>,
    }, 
    
   After copying this statement, change the title to the name of the platform.
   
   Path refers to the link of your page.

   Refer to this page for icons: https://react-icons.github.io/react-icons/icons?name=fa
   
   You can use the search bar, but if you choose an icon that doesn't start with FA
   follow the import statement above to add that icon.
   Every icon will be <FaIcons.(NameOfIcon)>.
   If this does not make sense, refer to the website or the creator (John Hoang) for help.
*/

export const SocialData = [ 
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/',
        icon: <FaIcons.FaLinkedin/>,
    },
    {
        title: 'Twitter',
        path: 'https://twitter.com/',
        icon: <FaIcons.FaTwitterSquare/>,
    },
    {
        title: 'YouTube',
        path: 'https://www.youtube.com/',
        icon: <FaIcons.FaYoutube/>,
    },
    {
        title: 'Instagram',
        path: 'https://www.instagram.com/',
        icon: <FaIcons.FaInstagramSquare/>,
    },
]