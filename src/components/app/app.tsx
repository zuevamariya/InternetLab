import { FC, useEffect, useState } from "react";
import Header from "../header/header";
import Main from "../main/main";
import { useDispatch } from "../../services/store";
import { setDeviceType } from "../../services/device/device-slice";



const App: FC = () => {
  const dispatch = useDispatch();
  const [_, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    dispatch(setDeviceType(newWidth));
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
      <Header />
      <Main />
    </> 
  )
}

export default App;