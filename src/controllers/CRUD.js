import post from "../models/blogModel.js"


class CRUD {

static async getAllPosts (req,res){
    console.log("all the posts are here");
    try{
        const allPosts = await post.find();
        res.status(200).json({data:allPosts});

        
    }
    catch{
        res.status(404).json({message: error.message});
    }

}   

static async createPost(req,res){
    console.log("post created");
    const {title, content, imageUrl, createdAt} = req.body;
    const newPost = new post({
        title,
        content,
        imageUrl,
        createdAt
    })
    try {
        await newPost.save();
        res.status(201).json({data:newPost});
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }


}

static async upddatePost(req,res){
    const {title, content, imageUrl}= req.body;
    const {id} = req.params;
    try{
        const thepostToUpdate = await post.findByIdAndUpdate(id,{title,content,imageUrl}, {new: true});
        res.status(200).json({data:thepostToUpdate});
    }
    catch(error){
        res.status(404).json({message: error.message});
        console.log(error.message)

    }

  
    
}
static async deletePost(req,res){
    const {id} = req.params;
    try{
        await post.findByIdAndDelete(id);
        res.status(200).json({message: "Post deleted successfully"});
    }
    catch(error){
        res.status(404).json({message: error.message});

    }
    
}
static async getPostById(req,res){
    const {id} = req.params;
    try{
        const thePost = await post.findById(id);
        res.status(200).json({data:thePost});
    }
    catch(error){
        res.status(404).json({message: error.message});

    }
    
}

}

export {CRUD} ;