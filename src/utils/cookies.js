const getCookie = (req) => {

    // Check existence of the cookie and return it
    let cookie = req.headers.authorized ? req.headers.authorized.split('=')[1] : null;
    return cookie;

}

export default getCookie;