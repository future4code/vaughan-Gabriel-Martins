import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToAdminHomePage(navigate)
        }
    }, [])

}

export default useUnprotectedPage;