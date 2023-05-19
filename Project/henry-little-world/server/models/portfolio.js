
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let portfolioSchema = new Schema({
    name: {
        type: String
    },
    jobTitle: {
        type: String
    },
    projectName: {
        type: String
    },
    period: {
        type: String
    },
    location: {
        type: String
    },
    keySkills: {
        type: String
    },
    description: {
        type: String
    },
    jobContent: {
        type: String
    },
    icon: {
        type: String
    },
}, {
    collection: 'portfolio'
})

module.exports = mongoose.model('portfolio', portfolioSchema)