//client imports
import { LocalStorageAuth } from "../Utils/localStorageAuth";

export function guardLogin(){
    if(LocalStorageAuth.getToken() != null)
        return true
    return false
}