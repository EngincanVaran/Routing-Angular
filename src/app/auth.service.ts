export class AuthService {
    logggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.logggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login()
    {this.logggedIn = true}

    logout()
    {this.logggedIn = false}



}