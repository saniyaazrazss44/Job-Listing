const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Jobs = require('../models/job')
const verifyJwt = require('../middleware/authMiddleware')

router.use(bodyParser.json()); // 'bodyParser' as a middleware

router.post('/createJob', verifyJwt, async (req, res) => {

    try {

        const { companyName, logoURL, jobPosition, monthlySalary, jobType, remoteOrOffice, location, jobDescription, aboutCompany, skillsRequired, additionalInformation } = req.body;

        if (!companyName || !logoURL || !jobPosition || !monthlySalary || !jobType || !remoteOrOffice || !location || !jobDescription || !aboutCompany || !skillsRequired) {

            return res.status(400).json({
                status: 400,
                message: 'Bad request'
            })
        }

        const jobDetails = new Jobs({
            companyName,
            logoURL,
            jobPosition,
            monthlySalary,
            jobType,
            remoteOrOffice,
            location,
            jobDescription,
            aboutCompany,
            skillsRequired,
            additionalInformation,
            refUserId: req.body.userId
        })

        await jobDetails.save()

        res.status(200).json({
            status: 200,
            message: 'Job created successfully',

        })

    } catch (error) {
        console.log("Error", error)
    }
})

router.post('/edit/:jobId', verifyJwt, async (req, res) => {

    try {

        const { companyName, logoURL, jobPosition, monthlySalary, jobType, remoteOrOffice, location, jobDescription, aboutCompany, skillsRequired, additionalInformation } = req.body;

        const jobId = req.params.jobId

        if (!companyName || !logoURL || !jobPosition || !monthlySalary || !jobType || !remoteOrOffice || !location || !jobDescription || !aboutCompany || !skillsRequired || !jobId) {

            return res.status(400).json({
                status: 400,
                message: 'Bad request'
            })
        }

        await Jobs.updateOne(
            { _id: jobId },
            {
                $set: {
                    companyName,
                    logoURL,
                    jobPosition,
                    monthlySalary,
                    jobType,
                    remoteOrOffice,
                    location,
                    jobDescription,
                    aboutCompany,
                    skillsRequired,
                    additionalInformation,
                }
            },
        )

        res.status(200).json({
            status: 200,
            message: 'Job details updated successfully',

        })

    } catch (error) {
        console.log("Error", error)
    }
})

router.post('/:jobId', async (req, res) => {

    try {

        const jobId = req.params.jobId

        if (!jobId) {

            return res.status(400).json({
                status: 400,
                message: 'Bad request'
            })
        }

        const jobDetails = await Jobs.findById(jobId)

        res.status(200).json({
            status: 200,
            data: jobDetails,
            message: 'Job details updated successfully',
        })

    } catch (error) {
        console.log("Error", error)
    }
})


module.exports = router;