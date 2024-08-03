import { FC, useEffect, useState } from "react";
import Header from "../header/header";
import Main from "../main/main";

const App: FC = () => {
  const[screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const[deviceType, setDeviceType] = useState<string>('desktop');

  const handleResize = () => {
    const width = window.innerWidth;
    setScreenWidth(window.innerWidth);

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
    return() => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header deviceType={deviceType}/>
      <Main />
    </> 
  )
}

export default App;