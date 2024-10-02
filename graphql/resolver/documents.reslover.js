const { get_preSinged_url } = require("../../aws");
const Circular = require("../../models/circulars.model");
const Reports = require("../../models/reports.models")

module.exports = {
    circulars : async()=>{
        try{
            const circular_lst = await Circular.findAll()
            const lst = await Promise.all(circular_lst.map(async(circular,index)=>{
                const url = await get_preSinged_url(circular.attachment)
                return {...circular.toJSON(),url}
            }))
            return lst
        }
        catch(error){
            throw new Error(error.message)
        }
    },
    Reports : async()=>{
        try{
            const reports_lst = await Reports.findAll()
            const lst = await Promise.all(reports_lst.map(async(report,index)=>{
                const url = await get_preSinged_url(report.attachment)
                return {...report.toJSON(),url}
            }))
            return reports_lst
        }
        catch(error){
            throw new Error(error.message)
        }
    }
}