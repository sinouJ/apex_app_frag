import url from './urlUtils'

const FetchData = {
    get: async (path, headers) => {
        const req = await fetch(url()+path, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers ? headers : null
            }
        })
        const res = await req.json()
        return res
    },
    post: async (path, body) => {
        const req = await fetch(url()+path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body ? body : null)
        })
        const res = await req.json()
        return res
    },
    delete: async (path, body) => {
        const req = await fetch(url()+path, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body ? body : null)
        })

        // const res = await req.json()

        return req
    },
    getapi: async (path, headers) => {
        const req = await fetch(url()+path, {
            headers
        })

        const res = await req.json()

        return res
    }
}


export {FetchData}