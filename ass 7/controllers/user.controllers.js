import User from "../models/user.model.js";
async function addUser(req, res){
    try{
        let newUser=req.body
        newUser=await User.create(newUser)
        res.status(201).send(newUser)

    } catch(error){
        console.log(error)
        res.status(400).send({"message": "User not added", "error":error.message})
    }
}

async function allUsers(req, res){
    try{
        let users= await User.find()
        console.log(users)
        res.send(users)

    } catch(error){
        console.log(error)
        res.status(400).send({"message": "User not added", "error":error.message})
    }
}

async function getUserById(req, res) {
    try{
        let id=req.params.id
        let user=await User.findById(id)
        if(user){
            res.send(user)
        }
        else{
            res.status(404).send({ message: "user not found "})
        }
    }
    catch(error){
        console.error(error);
        res.status(400).send({ message: "user not found ", "error":error.message })
    }
}
async function getUserBySic(req, res) {
    try{
        let sic=req.params.sic
        let user=await User.findOne({sic:sic})
        if(user){
            res.send(user)  
        }
        else{
            res.status(404).send({ message: "user not found "})
        }
    }
    catch(error){
        console.error(error);
        res.status(400).send({ message: "user not found ", "error":error.message })
    }
}

export { addUser,allUsers,getUserById,getUserBySic }