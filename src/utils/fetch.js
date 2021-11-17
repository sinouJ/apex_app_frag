const fetch = (url, options) => {
    const api_path = process.env.NODE == 'development' ? 'http://localhost:2222/api/' : 'https://api-apex-frag.herokuapp.com/api/'

    fetch(api_path+url, options)
}

export default fetch