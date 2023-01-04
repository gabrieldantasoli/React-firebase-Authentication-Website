import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default () => {
    const { signInGoogle , signed } = useContext(AuthGoogleContext);

    async function loginGoogle() {
        await signInGoogle();
    }

    if (!signed) {
        return  <button onClick={ loginGoogle }>Logar com o google</button>;
    } else {
        return <Navigate to="/home" />;
    }
}