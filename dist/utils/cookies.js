var getCookie = function(req) {
    // Check existence of the cookie and return it
    var cookie = req.headers.authorized ? req.headers.authorized.split("=")[1] : null;
    return cookie;
};
export default getCookie;
