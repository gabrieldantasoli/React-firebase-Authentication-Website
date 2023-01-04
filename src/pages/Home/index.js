import { useContext } from "react";
import { AuthGoogleContext } from '../../contexts/authGoogle'

export default () => {
    const { user , signOut , signed } = useContext(AuthGoogleContext);
    
    let userLogado;
    try {
        userLogado = JSON.parse(user);
    }catch {
        userLogado = user;
    }

    function logOut() {
        signOut();
    }

    return(
        <div>
            <h1>{userLogado.displayName}</h1>
            <button onClick={logOut}>LogOut</button>
        </div>
        
    )
}