const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getApplicants,
  updateApplicantStatus,
  getEmployerJobs,
  getNotifications,
  allJobs,
  searchJobs,
  savedJobs,
  unsaveJobs,
  getSavedJobs,
  matchApplication
} = require("../controllers/jobController");
const { protectStudent, protectEmployer } = require("../middleware/authMiddleware");
const upload = require("../utils/multer");

console.log("Student routes loaded");


router.post("/createJob", protectEmployer, upload.single("resume"), createJob);
router.get("/search", searchJobs);
router.get("/allJob", protectStudent, allJobs);
router.get("/employer", getAllJobs);
router.get("/employer/mine", protectEmployer, getEmployerJobs);
router.get("/:jobId", getJobById);
router.put("/:jobId", protectEmployer, updateJob);
router.delete("/:jobId", protectEmployer, deleteJob);
router.get("/:jobId/applicants", protectEmployer, getApplicants);
router.put("/:jobId/applicants/:studentId", protectEmployer, updateApplicantStatus);
router.post("/save/:jobId", protectStudent, savedJobs);
router.delete("/unsave/:jobId", protectStudent, unsaveJobs);
router.get("/save/jobs", protectStudent, getSavedJobs);
router.get("/matchAppplication/:jobId", matchApplication)

module.exports = router;