class Action {
    constructor(model){
        this.model = model  
    }

    async list(){
        try {
            let data = await this.model.find({}).exec()
            
            return data
        } catch(err){
            throw err
        }
    }

    async create(data){
        try{
            console.log(data)
            let result = await this.model(data)
            await result.save()
            
            return result
        } catch(err){
            throw err
        }
    }

    async show(id){
        try{
            let hasil = await this.model.findOne({_id: id}).exec()

            return hasil
        } catch(err){
            throw err
        } 
    }

    async getDetail(data){
        try{
            let hasil = await this.model.findOne({_id: data}).exec()
            console.log(hasil)
            return hasil
        } catch(err){
            throw err
        }
    }

    async search(params){
        try{
            let result = await this.model.find(
                params 
            ).exec()

            return result
        } catch(err){
            throw err
        }
    }

    async update(id, data){
        try {
            let query = await this.model.findByIdAndUpdate({
                _id: id
                }, data, { new: true }).exec()
            
            return query    

        } catch(err){
            throw err
        }
    }

    // async update(id, data){
    //     try{
    //         let query = await this.model.findAndModify({
    //             _id: id
    //             }, data, { new: true}).exec()

    //         return query    
    //     } catch(err){
    //         throw err
    //     }
    // }

    async delete(id){
        try{
            let hasil = await this.model.findOneAndDelete({
                _id: id
            }).exec()

            return hasil
        } catch(err){
            throw err
        }    
    }

    async deleteAll(){
        try{
            let query = await this.model.deleteMany({}).exec()

            return query
        } catch(err){
            throw err
        }
    }

}

module.exports = Action