/**
 * READ ALL BLOGS
 */

const getAll = {

    tags: ["Blogs"],
    description: "Get all blogs",
    operationId: "getAllBlogs",

    // Parameters
    parameters: [],

    // Request body
    requestBody: {},

    // Responses
    responses: {
        // Response code
        200: {
            description: "Blogs were obtained",
            content: {

                // Response content type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Blog",
                    },
                },
            },
        },
        // Response code
        500: {
            description: "Server error",

            // Response content
            content: {
                "application/json": {
                    schema: {
                        message: "Server error"
                    },
                },
            },
        }
    },

};

export default getAll;