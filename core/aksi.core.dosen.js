class Aksi {
    constructor(model){
        this.model = model
    }

    async buat(data){
        try{
            let hasil = new this.model(data)
            await hasil.save()
            
            return hasil
        } catch(err){
            throw err
        }
    }

    async list(){
        try{
            let data = await this.model.find({}).exec()

            return data
        } catch(err){
            throw err
        }
    }

    async tampil(id){
        try{    
            let hasil_data = await this.model.findOne({_id: id}).exec()

            return hasil_data
        } catch(err){
            throw err
        }    
    }

    async tampil_detail(data){
        try{
            let hasil = await this.model.findOne({_id: data}).exec()
            console.log(hasil)

            return hasil
        } catch(err){
            throw err
        }
    }

    async cari(params){
        try{
            let hasil = await this.model.find(params).exec()
            return hasil
        } catch(err){
            throw err
        }
    }

    async ubah(id, data){
        try{
            let hasil = await this.model.findByIdAndUpdate({
                _id: id
            }, data, { new: true }).exec()

            return hasil
        } catch(err){
            throw err
        }
    }

    async hapus(id){
        try{
            let query = await this.model.findOneAndDelete({
                _id: id
            }).exec()

            return query
        } catch(err){
            throw err
        }
    }

    async hapus_semua(){
        try{
            let query = await this.model.deleteMany({}).exec()

            return query
        } catch(err){
            throw err
        }
    }

}

module.exports = Aksi