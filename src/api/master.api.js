import { Api } from './axios.api';

export const MasterAPICall = function (url, method, payload = {}) {
    return new Promise(async (resolve, reject) => {
        if(method === "get") {
            await Api.get(url, {
                params: {
                    ...payload
                }
            })
                .then(({ data }) => {
                    if (data?.success === true) resolve(data);
                    else reject(data);
                })
                .catch((error) => reject(error));
        }else if(method === "delete") {
            await Api.delete(url)
                .then(({ data }) => {
                    if (data?.success === true) resolve(data);
                    else reject(data);
                })
                .catch((error) => reject(error));
        }
        else {
            let axiosCall = Api.post;
            switch (method) {

                case "post":
                    axiosCall = Api.post
                    break;

                case "put":
                    axiosCall = Api.put
                    break;
            
                default:
                    axiosCall = Api.post
                    break;
            }
            
            await axiosCall(url, payload)
                .then(({ data }) => {
                    if (data?.success === true) resolve(data);
                    else reject(data);
                })
                .catch((error) => reject(error));
        }
    });
};