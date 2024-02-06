"use client"
import Image from 'next/image';
import RateIcon from "../../public/icons/rate.png";
import Followers from "../../public/icons/followers.png";
import UserCheck from "../../public/icons/userCheck.png";
import DownloadQr from "../../public/icons/downloadQR.png";
import DownloadQrC from "../../public/icons/downloadQRC.png";
import ShareQr from "../../public/icons/ShareQR.png";
import ViewQr from "../../public/icons/viewQR.png";
import Logo from "../../public/icons/Logo.png";
import QRCode from "../../public/icons/QRCode.png";
import Button from '@mui/material/Button';
import { FiPlusCircle } from "react-icons/fi";
import { HiHeart } from "react-icons/hi2";
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Products } from './Products';

function AppBody() {
    const ProfileAvatar = "https://i.ibb.co/rQCthVd/avatar-Icon.jpg";

    const [products, setProducts] = useState(Products)

    /* Hitting Like for Each Product */
    const HandleIcon = (id) => {
    const upProd = products.map((x) => {
            if(x.id === id){
                return{...x, 
                    heartbg:"#D20653",
                    stroke:0}
            }
            return x;
        });
        setProducts(upProd);
    }
    
    /* Product Length */
    const productL = Products.length;

  return (
    <>
      <div className="main">
      <div className="mainProd flex flex-row gap-x-6 gap-y-6">
        <div className="userBody flex flex-col w-1/2">
            {/* User Details block */}

            <div className="adminblock w-full rounded-2xl p-6 bg-white">
                <div className="flex flex-col gap-y-3">
                    {/* Card Avatar */}
                    <div className="bg-white rounded-3xl block" 
                    style={{
                        width: "100px", 
                        height:"100px",
                        background:`url(${ProfileAvatar})`,
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center",
                        backgroundSize:"cover"
                    }}
                    >
                    </div>
                    {/* Card Header */}
                    <div className="text-lg font-sans font-semibold">
                       {"Hala Ahmed"}
                    </div>
                    {/* Card Caption */}
                    <div className="text-sm">
                        {"I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care."}
                    </div>
                    {/* Card Footer */}
                    <div className="flex w-full justify-between mt-2">
                        <div className="justify-start rounded-3xl px-2 py-3 bg-featurebg">
                            {/* Followers Block */}
                            <div className="flex flex-row gap-x-2">
                                <div className="pt-2">
                                <Image
                                    src={UserCheck}
                                    width={26}
                                    height={0}
                                    alt="Followers"
                                />
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <span className='text-base font-sans font-bold text-black'>{"5"}</span>
                                    </div>
                                    <div>
                                    <span className='text-sm font-sans font-semibold text-featuretext'>{"Following"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center rounded-3xl px-2 py-3 bg-featurebg">
                            {/* Followers */}
                            <div className="flex flex-row gap-x-2">
                                <div className="pt-2">
                                <Image
                                    src={Followers}
                                    width={23}
                                    height={0}
                                    alt="Followers"
                                />
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <span className='text-base font-sans font-bold text-black'>{"20"}</span>
                                    </div>
                                    <div>
                                    <span className='text-sm font-sans font-semibold text-featuretext'>{"Followers"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-end rounded-3xl px-2 py-3 bg-featurebg">
                            {/* Rate */}
                            <div className="flex flex-row gap-x-2">
                                <div className="pt-2">
                                <Image
                                    src={RateIcon}
                                    width={23}
                                    height={0}
                                    alt="Followers"
                                />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-navLinks text-xs">
                                        <span className='text-base font-sans font-bold text-black'>{"4.2"}</span>&nbsp;&nbsp;{"(15)"}
                                    </div>
                                    <div>
                                    <span className='text-sm font-sans font-semibold text-featuretext'>{"Rate"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Follow User */}
                    <div className="w-full mt-3">
                    <Button
                        disableRipple={true}
                        sx={{
                            width: "100%",
                            opacity: "1",
                            color: "#fff",
                            background:"linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
                            borderRadius:"15px",
                            padding:"10px 18px",
                            textTransform:"initial",
                            fontWeight: "bold",
                            fontSize: "14px"
                        }}
                        className='followBtn'>
                            Follow
                        </Button>
                    </div>
                </div>
            </div>

            
            <div className="adminblock w-full rounded-2xl p-6 mt-4 bg-white relative">
            <div className="justify-end res-addBtn">
                <Button startIcon={<FiPlusCircle className="font-bold text-white" />}
              disableRipple={true}
              className='Sub-addBtn'>
                Add Review
              </Button>
                </div>
                {/* QRCode Header */}
                <div className='flex justify-between w-full'>
                    <div className="text-lg font-bold text-black justify-start">
                        QR Code
                    </div>
                    <div className="justify-end">
                        <div className="flex flex-row w-full gap-x-3">
                            <div>
                            <IconButton disableRipple={true}>
                            <Image
                            src={ViewQr}
                            width={20}
                            height={0}
                            alt="Search"
                            />
                            </IconButton>
                            </div>
                            <div>
                            <IconButton disableRipple={true}>
                            <Image
                            src={ShareQr}
                            width={20}
                            height={0}
                            alt="Search"
                            />
                            </IconButton>
                            </div>
                            <div>
                            <IconButton disableRipple={true}>
                            <Image
                            src={DownloadQr}
                            width={20}
                            height={0}
                            alt="Search"
                            />
                            </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* QR Code Heading */}
                <div className="w-full rounded-3xl px-2 py-3 bg-featurebg mt-2">
                            {/* Rate */}
                            <div className="flex flex-row gap-x-2">
                                <div>
                                <Image
                                    src={DownloadQrC}
                                    width={25}
                                    height={0}
                                    alt="Followers"
                                />
                                </div>
                                <div className="pl-2 text-sm">
                                Download the QR code or share it with your friends.
                                </div>
                            </div>
                        </div>
            {/* QR Code Block */}
            <div className="QRBody flex flex-col mt-3">
                <div className="flex justify-center w-full">
                <Image
                    src={Logo}
                    width={"100%"}
                    height={0}
                    alt="Search"
                    />
                </div>
                <div className="flex justify-center w-full font-semibold font-sans text-lg">
                    {"Hala Ahmed"}
                </div>
                <div className="flex justify-center w-full">
                <Image
                    src={QRCode}
                    width={"100%"}
                    height={0}
                    alt="Search"
                    />
                </div>
                <div className="flex justify-center w-full font-sans font-semibold text-sm">
                    Follow Us on Mazaady
                </div>
            </div>
            </div>
        </div>
        {/* Products & Review */}
        <div className="bg-white w-full rounded-2xl px-3 py-4">
            <div className="flex menbar justify-between">
                <div className="flex flex-row gap-x-3">
                    <div>
                        <button type="button" className="block py-1 px-4 border-1 border-featuretext text-featuretext rounded-2xl font-sans font-bold bg-featurebg">
                            Products
                        </button>
                    </div>
                    <div>
                    <button type="button" className="block py-1 px-4 border-1 border-greyblk text-greyText rounded-2xl font-sans bg-white">
                            Articles
                        </button>
                    </div>
                    <div>
                    <button type="button" className="block py-1 px-4 border-1 border-greyblk text-greyText rounded-2xl font-sans bg-white">
                            Reviews
                        </button>
                    </div>
                </div>
                <div className="justify-end Nest-addBtn">
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
              className='Sub-addBtn'>
                Add Review
              </Button>
                </div>
            </div>

            <div className="flex flex-col gap-y-4 w-full mt-4">
                <div className='text-base text-greyText'>
                    <span className="text-black text-3xl font-bold font-sans w-full">Products</span>&nbsp;&nbsp;( {`${productL}`} )
                </div>
                {products?.map((prod) => (
                <div className="product-thumb flex flex-row gap-x-4 px-1 mt-1 gap-y-4" key={prod.id}>
                    {/* Product thumb */}
                <div className="bg-white rounded-3xl relative" 
                    style={{
                        width: "150px", 
                        height:"110px",
                        background:`url(${prod.img})`,
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center",
                        backgroundSize:"cover"
                    }}
                    >
                    <div style={{
                        width:"100px", 
                        height:"27px", 
                        position:"absolute", 
                        borderRadius:"33.8px 0px 33.8px 0px", 
                        background:`${prod.statebg}`, 
                        bottom:"0px", 
                        right:"0",
                        textAlign:"center",
                        fontSize:"12px",
                        color:"#fff",
                        lineHeight:"27px",
                        fontFamily:"sans-serif"}}>
                            {prod.state}
                    </div>
                    <div style={{
                        width: "35px",
                        height:"35px", 
                        position:"absolute", 
                        left:"8px", 
                        top:"6px",
                        background:"#fff",
                        borderRadius:"100px",
                        lineHeight:"35px",
                        textAlign:"center"
                        }}
                        className="res-harts">
                        <IconButton disableRipple={true} sx={{padding:"0"}} onClick={() => HandleIcon(prod.id)}>
                            <HiHeart fill={prod.heartbg} strokeWidth={prod.stroke} key={prod.id} />
                        </IconButton>
                    </div>
                    </div>
                    {/* Product Details */}
                   <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col justify-start gap-y-2">
                        {/* product head */}
                        <div className="font-sans text-lg">
                            {prod.productName}
                        </div>
                        {/* Product Price */}
                        <div className="font-sans text-xl font-bold">
                            <span className="text-base text-greyText font-sans font-normal">Starting Price</span> {prod.price} EGP
                        </div>
                        {/* Product Lots */}
                        <div className="res-lots flex flex-row gap-x-3 gap-y-2">
                            <div className="text-base text-greyText font-sans font-normal">
                                Lot Starts in
                            </div>
                            {/* Lots */}
                            <div className="flex flex-row gap-x-4">
                                <div className="justify-end text-sm font-sans font-normal rounded-3xl px-3 py-1 bg-featurebg text-featuretext">
                                    <span className="text-featuretext text-base font-bold">{prod.day}</span>&nbsp;Days
                                </div>
                                <div className="justify-end text-sm font-sans font-normal rounded-3xl px-3 py-1 bg-featurebg text-featuretext">
                                    <span className="text-featuretext text-base font-bold">{prod.hrs}</span>&nbsp;Hours
                                </div>
                                <div className="justify-end text-sm font-sans font-normal rounded-3xl px-3 py-1 bg-featurebg text-featuretext">
                                    <span className="text-featuretext text-base font-bold">{prod.mins}</span>&nbsp;Minutes
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="justify-end base-harts">
                        <IconButton disableRipple={true} sx={{padding:"0"}} onClick={() => HandleIcon(prod.id)}>
                            <HiHeart fill={prod.heartbg} strokeWidth={prod.stroke} key={prod.id} />
                        </IconButton>
                    </div>
                   </div>
                </div>
                ))}
            </div>
            
        </div>
      </div>
      </div>
    </>
  )
}

export default AppBody;