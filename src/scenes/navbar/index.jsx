import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import UserIcon from "../../assets/user-icon.png";
import LangIcon from "../../assets/lang-icon.png";
import Link from "./Link";
import {Bars3BottomRightIcon, XMarkIcon} from "@heroicons/react/24/solid"

const Navbar = ({selectedPage, setSelectedPage}) => {
  const flexBetween = "flex items-center justify-between bg-white";

  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6  md:shadow-lg py-6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <h2 className="font-ibarraRealNova text-2xl ml-3 text-center">
              Skinbuddy
            </h2>
          {isAboveMediumScreens ?   <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Journal"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Product"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Sign Out"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

              </div>
              <div className={`${flexBetween} gap-8 mr-5`}>
                <img alt="lang-icon" className="" src={LangIcon} />
                <img alt="user-icon" className="" src={UserIcon} />
              </div>
            </div>
            : (
                <button
                className="rounded-full bg-black p-2"
                onClick={()=>setIsMenuToggled(!isMenuToggled)}
            >
                <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            </button>
            )}

          </div>
        </div>
      </div>
       {/* MobileMenu */}
       {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link 
                        className="text-white"
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>
                        <Link 
                        page="Journal" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>
                        <Link 
                        page="Product"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link 
                        page="Sign Out"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}/>

                    </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
