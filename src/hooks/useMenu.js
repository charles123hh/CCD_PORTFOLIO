import { useNavigate, useLocation } from "react-router-dom";

const useMenu = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const getPath = (value) => {
        switch(value){
            case '1': return "/bio";
            case '2': return "/i/love";
            case '3': return "/projects";
            case '4': return "/posts";
            case '5': return "/contact";
            case '404': return "/404";
            default :  return "/";
        }
    }
    const setMenu = (value) => {
         navigate({pathname: getPath(value)});
    }
    const isActive = (value) => {
        return location.pathname === getPath(value);
    }
    const getCurrentLocation = () => {
        let str = location.pathname;
        return str.endsWith('/') ? str.slice(0, -1) : str;
    }

    return [isActive, setMenu, getCurrentLocation];
}

export default useMenu;