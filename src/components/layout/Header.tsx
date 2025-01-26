"use client";

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { BellIcon, TwoArrowRotateIcon } from "@/assets/IconCollection";

const Header = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div className="w-full h-20 flex justify-center">
      <div className="w-246 h-full flex justify-between items-center">
        <Image
          src="/dreamLogo.svg"
          width={132}
          height={40}
          alt="Woondong Dream Logo"
          className="cursor-pointer"
        />
        {isLoggedIn ? (
          <>
            <button onClick={logout} className="bg-slate-300">
              Logout
            </button>
            <div className="flex gap-4 items-center text-grey5">
              <div className="flex gap-1 items-center cursor-pointer">
                <TwoArrowRotateIcon width={16} height={16} />
                <span>전문가 등록</span>
              </div>
              <div className="w-9 h-9 flex justify-center items-center cursor-pointer">
                <BellIcon width={24} height={24} />
              </div>
              <div className="w-9 h-9 flex justify-center items-center rounded-full overflow-hidden cursor-pointer">
                <img
                  className="object-cover"
                  src="/img/mockProfile1.png"
                  alt="profile"
                />
              </div>
            </div>
          </>
        ) : (
          <button onClick={login} className="bg-slate-300">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
