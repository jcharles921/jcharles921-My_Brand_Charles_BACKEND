import getAll from "./Blog/readAll.js";

const paths = {
    "/CRUD": {
        get: getAll,
    },
};

export default paths;