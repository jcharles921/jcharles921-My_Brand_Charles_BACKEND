const components = {
    schema: {

        

        /**
         * 
         * BLOGS
         * 
         */

        /**
     * Blog Response
     */
    Blog: {
        type: "object", // Data type
        properties: {
          // Blog Id
          _id: {
            type: "string", // Data type
            description:
              "Single blog Id that is automatically assigned to the blog by MongoDB", // Description
            example: "640f6ed7d8f101c16399e15c", // Example
          },

          // Blog title
            title: {
                type: "string", // Data type
                description: "Blog title",
                example: "Blog title",
            },

            // Blog content
            content: {
                type: "string", // Data type
                description: "Blog content",
                example: "Blog content",
            },

            // Blog image url
            imageUrl: {
                type: "string", // Data type
                description: "Blog image url",
                example: "Blog image url",
            },

            // Blog comment section
            commentSection: {
                type: "array", // Data type
                description: "Blog comment section",
                example: "Blog comment section",
                items: {
                    type: "object",
                    properties: {
                        // Username
                        username: {
                            type: "string", // Data type
                            description: "Username",
                            example: "John",
                        }, 
                        message: {
                            type: "string", // Data type
                            description: "Message",
                            example: "Message",
                        }
                    },
                }
            },

            // Likes
            like: {
                type: "number", // Data type
                description: "Likes",
                example: "Likes",
            },

            // Blog created at
            createdAt: {
                type: "string", // Data type
                description: "Blog created at",
                example: "Blog created at",
            },

            // Blog version
            __v: {
                type: "number", // Data type
                description: "Blog version",
                example: 0,
            }


    }

    }
}
};

export default components;