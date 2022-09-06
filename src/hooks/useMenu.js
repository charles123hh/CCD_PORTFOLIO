import { useNavigate } from "react-router-dom";

const useMenu = () => {
    let navigate = useNavigate();
    const setPage = (value) => {
        switch(value){
            case '0':
                navigate({pathname: "/bio"});
            break;
            case '1':
                navigate({pathname: "/expirience"});
            break;
            case '2':
                navigate({pathname: "/projects"});
            break;
            case '3':
                navigate({pathname: "/contact"});
            break;
            case '4':
                navigate({pathname: "/i/love"});
            break;
            case '404':
                navigate({pathname: "/404"});
            break;
            default :
                navigate({pathname: "/"});
            break;
        }

    }
    return [setPage];
}

export default useMenu;