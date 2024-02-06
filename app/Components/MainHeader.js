"use client"
import Image from 'next/image';
import Link from "next/link";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { FiPlusCircle } from "react-icons/fi";
import IconSearch from "../../public/icons/search.png";
import AlertIcon from "../../public/icons/alert.png";
import GlobalIcon from "../../public/icons/global.png";
import MenuBar from "../../public/icons/menuBar.png";


import { useState } from 'react';

function MainHeader() {

  return (
    <>
      <nav className="pt-2 bg-white">
        <div className="mainhead flex flex-row w-full px-14 justify-between">
          <div className="justify-start">
            <div className="navbl flex flex-row gap-x-6">
              <div className="leading-tight pt-2 menubar">
              <IconButton disableRipple={true}>
                <Image
                src={MenuBar}
                width={25}
                height={0}
                alt="Search"
              />
                </IconButton>
              </div>
              <div>
                <Link href={"https://mazaady.com/"} target="_blank">
              <Image
                src="https://mazaady.com/images/mazaady-logo.svg"
                width={135}
                height={0}
                alt="mazaady logo"
              />
              </Link>
              </div>
              <div>
                <div className="flex flex-row gap-x-8 pt-1 navs">
                  <div className="font-sans block cursor-pointer py-2 active">
                    Home
                  </div>
                  <div className="font-sans block cursor-pointer py-2" 
                  style={{color:"#828282"}}
                  >
                    Blog
                  </div>
                  <div className="font-sans block cursor-pointer py-2" 
                  style={{color:"#828282"}}
                  >
                    Gifts
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end">
            <div className="flex flex-row gap-x-3 mt-2">
              <div className="block px-2 border-r-2 border-navborder navIcon">
                <IconButton disableRipple={true}>
                <Image
                src={IconSearch}
                width={20}
                height={0}
                alt="Search"
              />
                </IconButton>
              </div>
              <div className="block px-2 border-r-2 border-navborder navIcon">
                <IconButton disableRipple={true}>
                <Image
                src={AlertIcon}
                width={20}
                height={0}
                alt="Search"
              />
                </IconButton>
              </div>
              <div className="block px-2">
              <Avatar alt="Remy Sharp" src="https://i.ibb.co/rQCthVd/avatar-Icon.jpg" />
              </div>
              <div className="block addProd">
              <Button startIcon={<FiPlusCircle className="font-bold text-white" />}
              disableRipple={true}
              sx={{opacity: "1",
                color: "#fff",
                background:"linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
                borderRadius:"10px",
                padding:"10px 18px",
                textTransform:"initial",
                fontWeight: "bold",
                fontSize: "12px",
                lineHeight: "2px"}}
              className='addBtn'>
                Add New Product
              </Button>
              </div>
              <div className="flex flex-row global">
              <div className="block px-1">
                <IconButton disableRipple={true}>
                <Image
                src={GlobalIcon}
                width={20}
                height={0}
                alt="Search"
              />
                </IconButton>
              </div>
              <div className="leading-9 px-1 text-black">
                <b>EN</b>
              </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MainHeader;