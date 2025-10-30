import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-12 rounded-t-2xl bg-card flex justify-between font-semibold">
      <div>
        <p>Eburon ©{new Date().getFullYear()} | All rights reserved</p>
      </div>
      <div className="flex flex-col">
        <p>Boterstraat 36, Ieper, Belgium</p>
        <p>eburon@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
