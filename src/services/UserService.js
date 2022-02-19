class UserService {
    #domain = 'https://radiant-temple-07706.herokuapp.com/';

    async register(data) {
        const response = await fetch(`${this.#domain}auth/local/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return await response.json();
    }

    async login(data) {
        const response = await fetch(`${this.#domain}auth/local`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return await response.json();
    }
}

export default new UserService();