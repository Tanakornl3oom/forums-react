import axios from 'axios';

function HttpCore() {
    //interceptor

    HttpCore.prototype.get = url => {
        return axios.get(mapUrl(url));
    };

    HttpCore.prototype.post = (url, body, options = {}) => {
        return axios.post(mapUrl(url), body, options);
    };

    HttpCore.prototype.put = (url, body, options = {}) => {
        return axios.put(mapUrl(url), body, options);
    };

    function mapUrl(url) {
        return `${url}`;
    }
}

export default new HttpCore();
