import { useNavigate, useLocation } from "react-router-dom";

const useMenu = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const getPath = (value) => {
        switch(value){
            case '0': return "/bio";
            case '1': return "/expirience";
            case '2': return "/projects";
            case '3': return "/contact";
            case '4': return "/i/love";
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
        return location.pathname;
    }

    return [setMenu, isActive, getCurrentLocation];
}

export default useMenu;