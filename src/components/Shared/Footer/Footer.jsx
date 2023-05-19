import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../.././../assets/images/logo.png";

const Footer = () => {
    return (
      <div className="w-full bg-base-300">
        <footer className="mx-auto lg:max-w-7xl mt-20 grid lg:grid-cols-4 px-4 justify-between footer py-5">
          <div className="">
            <img className="w-40" src={logo} alt="" draggable="false" />
            <p>
              Delivering the latest product trends and industry news straight to
              your inbox. We’ll never share your email address with a third
              party.
            </p>
          </div>
          <div className="">
            {" "}
            <span className="footer-title">Services</span>
            <a href="" className="text-lg ">
              Branding
            </a>
            <a href="" className="text-lg ">
              Design
            </a>
            <a href="" className="text-lg ">
              Marketing
            </a>
            <a href="" className="text-lg ">
              Advertisement
            </a>
          </div>

          <div className="">
            <span className="footer-title uppercase ">Legal</span>
            <li href="" className="text-lg list-none">
              Terms of use
            </li>
            <li href="" className="text-lg list-none">
              Privacy policy
            </li>
            <li href="" className="text-lg list-none">
              Cookie policy
            </li>
          </div>
          <div className="">
            <span className="footer-title">CONTACT INFO</span>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">Address:</p>{" "}
              <p>New Yourk, USA</p>
            </li>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">Phone:</p>{" "}
              <p>+91 123 456 789</p>
            </li>
            <li href="" className="text-lg flex">
              <p className="text-slate-500 mr-3">Email:</p> <p> toy@info.com</p>
            </li>
            <li href="" className="text-3xl flex">
              <a href="">
                {" "}
                <FaFacebook className="mr-4" />
              </a>
              <a href="">
                {" "}
                <FaTwitter className="mr-4" />
              </a>
              <a href="">
                <FaInstagram className="mr-4" />
              </a>
              <a href="">
                <FaLinkedin className="mr-4" />
              </a>
            </li>
          </div>
        </footer>
        <div className="footer footer-center pb-4 bg-base-300 text-base-content">
          <p>Copyright © 2023 - All right reserved by Toy Kids Ltd</p>
        </div>
      </div>
    );
};

export default Footer;