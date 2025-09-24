export class LocalStorageAuth{
    static credentialsKey = 'user'

    static store(data) {
        let credentials = JSON.stringify(data)
        localStorage.setItem("user", credentials)
    }

    static get(data) {
        const credentials =JSON.parse(localStorage.getItem(credentialsKey))
        return credentials
    }

    static getToken(data) {
        const {token} = JSON.parse(localStorage.getItem(credentialsKey));
        return token
    }

    static clear(data) {
        localStorage.removeItem(credentialsKey)
    }
}