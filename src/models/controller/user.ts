
import userModel from "../usert"

const userController = {
    get: async (req, res) => {
        try{
            const allUsers = await userModel.find()
            res.status(200).send(allUsers)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    add: async (req, res) => {
       
       try {
            const myUser = new userModel({...req.body})
/*          myUser.name = req.body.name
            myUser.email = req.body.email
            myUser.age = req.body.age */
            await myUser.save()
            res.send(myUser)
       } catch (error) {
            res.status(500).send(error)
       }
    
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            await userModel.findOneAndDelete({_id: id})
        } catch (error) {
            res.status(500).send(error)
        }
        
    },
    edit: async (req, res) => {
        try {
            const id = req.params.id
            const user = await userModel.findOneAndUpdate({_id: id}, {...req.body})
            res.status(200).send(user)
        } catch (error) {
            res.status(500).send(error)
        }
        
       
    },
}
export default userController