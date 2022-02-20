import useLocalStorage from "../hooks/useLocalStorage";

class BaseService {
    #domain = 'https://radiant-temple-07706.herokuapp.com/';

    getHeaders() {
        const [user, setUser] = useLocalStorage('user', null);

        return {
            Authorization: 'Bearer ' + user.jwt,
            'Content-Type': 'application/json',
        }
    }

    async get(path) {
        const response = await fetch(this.#domain + path, {
            method: "GET",
            headers: this.getHeaders()
        });

        return await response.json();
    }

    async put(path, data) {
        const response = await fetch(this.#domain + path, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: this.getHeaders()

        });

        return await response.json();
    }

    async delete(path) {
        const response = await fetch(this.#domain + path, {
            method: "DELETE",
            headers: this.getHeaders()

        });

        return await response.json();
    }

    async post(path, data) {
        const response = await fetch(this.#domain + path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: this.getHeaders()
        });

        return await response.json();
    }
}

export default BaseService;