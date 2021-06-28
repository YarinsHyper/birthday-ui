import axios from axios

const url = "http://localhost:9000/api/createBirthday"

class CrudService {

    static getAllRequest() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(get => ({
                        ...get,
                        createdAt: new Date(get.createdAt)
                    })));
            } catch (err) {
                reject(err)
            }
        });
    }

    static createRequest(name, personalNumber, date) {
        return axios.post(url, {
            name,
            personalNumber,
            date
        });
    }
}

export default CrudService;