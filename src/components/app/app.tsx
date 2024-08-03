import { FC, useEffect, useState } from "react";
import Header from "../header/header";
import Main from "../main/main";
import { TDevice } from "./type";

const App: FC = () => {
  const[_, setScreenWidth] = useState<number>(window.innerWidth);
  const[deviceType, setDeviceType] = useState<string>('desktop');

  const device: TDevice = {
    isDesktop: deviceType === "desktop",
    isTablet: deviceType === "tablet",
    isMobile: deviceType === "mobile",
    isSmallMobile: deviceType === "smallMobile",
    isMobileOrTablet: deviceType === "tablet" || 
                      deviceType === "mobile" || 
                      deviceType === "smallMobile",
    isMobiles: deviceType === "mobile" || deviceType === "smallMobile"
  }

  const handleResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);

    if (width >= 1024) {
      setDeviceType('desktop');
    } else if (width >= 768) {
      setDeviceType('tablet');
    } else if (width >= 375) {
      setDeviceType('mobile');
    } else {
      setDeviceType('smallMobile');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return() => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header deviceType={device}/>
      <Main deviceType={device}/>
    </> 
  )
}

export default App;