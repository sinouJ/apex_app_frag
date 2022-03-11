import Cookies from 'js-cookie'
import url from './urlUtils'

const getUsername = async () => {
    let isAuthenticated = false
    const token = Cookies.get('token')
    const req_url = url()+'user/usernameAuth'

    const req = await fetch(req_url, {
        method: 'GET',
        headers: {
            authorization: token
        }
    })

    const res = await req.json()

    if (res.status === 200) {
        isAuthenticated = true
    }

    return isAuthenticated
}

export default getUsername