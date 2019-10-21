const search = require("../../models/dosen")

class SearchDosen {
    constructor(req){
        this.query = req
    }

    async all(){
        try {
            let query1 = await search.find(this.query)
            if(query1.length == 0){
                throw new error("Data tidak ditemukan")
            }
            return query1
        } catch(err) {
            throw err
        }
    }
}

module.exports = SearchDosen