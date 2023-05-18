import React from 'react';

import git from "../images/github.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

function Footer() {
  return (
    <div className='max-w-[1640px] bg-orange-700'>
        <h3 className='text-center font-bold text-xl text-yellow-100'>We can stay in touch through the following social networks.</h3>
        <h4 className='text-center mt-3 font-bold'>I am <span className='text-blue-500'>Kamyar</span>, and I can participate in your projects</h4>
        <div className='flex p-10 justify-center gap-10'>
            <a href="https://www.linkedin.com/in/kamyar-kamali-671a5822b/" target='_blank'>
            <img className='w-[60px]' src={linkedin} alt="linkdin" />
            </a>
            <a href="https://www.instagram.com/kamyr_02111/?next=%2Fchallenge%2FAXHa3s9C5iCRRpi2QC3urc0pw8rmVzqImFjAVv98daHmsC28Vs9EyC3tydoI6exJTKG1yg%2FAfwS78v890dxtxh-p_Syuy7CxHlxkvbJGPwePv3wBHCn5gDQwN0Po2Tn8sewmZSTOSX-fvrnBNZ-uQ%2F" target='_blank'>
            <img className='w-[60px]' src={instagram} alt="insta" />
            </a>
            <a href="https://github.com/Kamyarkamali?tab=repositories" target='_blank'>
            <img className='w-[60px]' src={git} alt="git" />
            </a>
        </div>
    </div>
  )
}

export default Footer