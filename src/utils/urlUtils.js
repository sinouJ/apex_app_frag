const url = () => {
    if (process.env.NODE_ENV == 'development') return 'http://localhost:2222/api/'
    else return 'https://api-apex-frag.herokuapp.com/api/'
}

export {url}