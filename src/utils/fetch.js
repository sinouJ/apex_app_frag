import url from './urlUtils'

const FetchData = {
    get: (path, headers) => {
        fetch(url+path, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            }
        })
    },
    post: (path, body) => {
        fetch(url+path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    },
    delete: (path, options) => {
        fetch(url+path, {
            method: "DELETE",
            options
        })
    }
}



export {FetchData}