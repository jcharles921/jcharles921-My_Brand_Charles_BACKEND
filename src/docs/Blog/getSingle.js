/**
 * 
 * READ SINGLE BLOG
 * 
 */

const getSingle = {

    tags: ["Blogs"],
    description: "Get a blog",
    operationId: "getSingleBlog",

    // Parameters
    parameters: [
        {
            name: "id", // Name of the parameter
            in: "path", // Parameter is in the path
            schema: {
                $ref: "#/components/schemas/_id", // Parameter schema
            },
        }
    ],

};

export default getSingle;