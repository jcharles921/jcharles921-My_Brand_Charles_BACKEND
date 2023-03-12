import query from "../models/queryModel.js";
import allErr_Success from "../utils/allErr_Success.js";


class Queries {
    static async getAllQueries(req, res){
        try{
            const allQueries = await query.find();
            allErr_Success.successMsg(res, 200, "All queries", allQueries);
        }
        catch{
            allErr_Success.failureMsg(res, 404, "No queries found");
        }
    }
    static async createQuery(req, res){
        const {name, email, message,createdAt } = req.body;
        const newQuery = new query({
            name,
            email,
            message,
            createdAt
        })
        try {
            await newQuery.save();
            allErr_Success.successMsg(res, 201, "Query created", newQuery);
        }
        catch (error) {
            console.log(error);
            // allErr_Success.failureMsg(res, 409, "Query already exists");
            res.status(500).json({
                message: error.message,
                Code: error
              });
        }
    }
}

export default Queries;