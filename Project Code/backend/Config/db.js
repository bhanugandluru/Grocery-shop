const mongoose = require("mongoose")


module.exports = () => {

return mongoose.connect(

"mongodb+srv://dhk_foodies_admin: 2mgwTCg9F1c16YaC@dhkfoodiescluster .chpxfaz.mongodb.net/?retryWrites=true &w=majority&appName=DHKFOODIESCluster"
 )

}