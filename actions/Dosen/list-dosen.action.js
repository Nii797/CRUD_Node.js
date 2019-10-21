const listdosen = require("../../models/dosen")

class List {
    constructor(search, params) {
        this.search = search
        this.params = params
    }

    async exec(){
        try {
            let hasil =  await listdosen.paginate(
                this.search,
                this.params
            ).then(res => {
                return {
                    data: res.docs,
                    total: res.total,
                    limit: res.limit,
                    page: res.page,
                    pages: res.pages
                }
            })

            return hasil
        } catch(err){
            throw err
        }
    }
}

module.exports = List