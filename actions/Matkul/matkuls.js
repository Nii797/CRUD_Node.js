// ============== nama field dan type datanya =============
// nomatkul:   Number,
// namamatkul: String,
// dosen:      String,
// semester:   String 
//                     Beberapa fungsi
//    {buat, semua, dapatkan semua/semua, detail, ubah, hapus} 
// ========================================================

const Matkul = require('../../models/matkul');

const buat = async(req) => {
    let { nomatkul, namamatkul, dosen, semester } = req.body
    nomatkul = parseInt(nomatkul)

    let masukan_data = {
        nomatkul, namamatkul, dosen, semester
    }

    let data = new Matkul(masukan_data)

    try {
        await data.save()
        
        return data
    } catch(err){
        throw err
    }
} 

const semua = async () => {
    try {
        let query = await Matkul.find({}).exec()
        let data  = query.map((v, i) => {
            return {
                nomatkul:   v.nomatkul,
                namamatkul: v.namamatkul,
                dosen:      v.dosen,
                semester:   v.semester
            }
        })
        
        return data 
    } catch(err) {
        throw err
    }    
}

const detail = async (id) => {
    try {
        let query = await Matkul.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const ubah = async (id, updated_data) => {
    let { nomatkul, namamatkul, dosen, semester } = updated_data

    let data = {
        nomatkul, namamatkul, dosen, semester
    }

    try {
        let query = await Matkul.findOneAndUpdate({
            _id: id
        }, data).exec()

        return query
    } catch(err) {
        throw err
    }
}

const hapus = async (id) => {
    try {
        let query = await Matkul.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err){
        throw err
    }
}

module.exports = {
    buat,
    semua,
    detail,
    ubah,
    hapus
}
