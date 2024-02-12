const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: true,

    },
    logoURL: {
        type: String,
        required: true,

    },
    jobPosition: {
        type: String,
        required: true,

    },
    monthlySalary: {
        type: String,
        required: true,

    },
    jobType: {
        type: String,
        required: true,

    },
    remoteOrOffice: {
        type: String,
        required: true,

    },
    location: {
        type: String,
        required: true,

    },
    jobDescription: {
        type: String,
        required: true,

    },
    aboutCompany: {
        type: String,
        required: true,

    },
    skillsRequired: {
        type: String,
        required: true,

    },
    additionalInformation: {
        type: String,
        required: true,

    },
    refUserId: {
        type: mongoose.Types.ObjectId,
        required: true,
    }
})

module.exports = mongoose.model("Jobs", jobSchema)