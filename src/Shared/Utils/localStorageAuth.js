export class LocalStorageAuth{
    static credentialsKey = "user"

    static store(data) {
        let credentials = JSON.stringify(data)
        localStorage.setItem(LocalStorageAuth.credentialsKey, credentials)
    }

    static get(data) {
        const credentials =JSON.parse(localStorage.getItem(LocalStorageAuth.credentialsKey))
        return credentials
    }

    static getToken(data) {
        const credentials = JSON.parse(localStorage.getItem(LocalStorageAuth.credentialsKey));
        if(credentials!=null)
            return credentials.token
        return null
    }

    static clear(data) {
        localStorage.removeItem(LocalStorageAuth.credentialsKey)
    }
}