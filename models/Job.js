
// const mongoose = require("mongoose");

// const applicationSchema = new mongoose.Schema({
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
//   name: String,
//   email: String,
//   phone: String,
//   github: String,
//   linkedin: String,
//   portfolio: String,
//   coverLetter: String,
//   location:String,
//   resume: String,
//   status: {
//     type: String,
//     enum: ["pending", "accepted", "rejected"],
//     default: "pending",
//   },
//   appliedAt: { type: Date, default: Date.now }
// });

// const jobSchema = new mongoose.Schema({
//   title: String,
//   location:String,
//   description: String,
//   requiredSkills: [String],
//   requiredEducation: String,
//   employerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },

//   // 🔹 just IDs (fast lookup)
//   applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],

//   // 🔹 full application details
//   applications: [applicationSchema]

// }, { timestamps: true });

// module.exports = mongoose.model("Job", jobSchema);




















const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },

  // 🔹 Basic Info
  name: String,
  email: String,
  phone: String,
  dob: Date,
  location: String,

  // 🔹 Professional Info
  role: String,
  experience: Number,
  company: String,
  position: String,

  // 🔹 Education
  education: String,
  degreeStart: Date,
  degreeEnd: Date,

  // 🔹 Skills & Projects
  skills: [String],
  projects: [String],

  // 🔹 Links
  github: String,
  linkedin: String,
  portfolio: String,

  // 🔹 Documents
  resume: String,        // URL (Cloudinary / S3 recommended)
  profileImage: String,  // URL

  // 🔹 Extra Content
  coverLetter: String,

  // 🔹 Status
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },

  appliedAt: { type: Date, default: Date.now }
});

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,

  requiredSkills: [String],
  requiredEducation: String,

  employerId: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" },

  // 🔹 Fast lookup (IDs only)
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],

  // 🔹 Full application snapshot
  applications: [applicationSchema],
  salary:String,
  jobType:String,
  workMode:String

}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);