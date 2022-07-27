import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='row d-flex'>
      <div className='col '>
        <div className='home-about-social-links'>Designed by Vidyadheesh M N</div>
      </div>
      <div className='col'>
        <ul className='home-about-social-links'>
          <li className='social-icons'>
            <a
              href='https://github.com/VidyadheeshMN'
              target='_blank'
              rel='noreferrer'
              className='icon-colour  home-social-icons'
            >
              <AiFillGithub />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://www.linkedin.com/in/vidyadheesh-m-n-637476199/'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-social-icons'
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
