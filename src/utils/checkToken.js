import Cookies from 'js-cookie'

const getUsername = async () => {
    let isAuthenticated = false
    const token = Cookies.get('token')
    const url = 'http://localhost:2222/api/user/username'

    const req = await fetch(url, {
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