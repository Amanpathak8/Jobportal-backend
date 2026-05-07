// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   passwordHash: { type: String, required: true },
//   education: String,
//   skills: [String],
//   experience: Number,
//   location:String,
//   isComplete: { type: Boolean, default: false },
//   appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
// }, { timestamps: true });

// module.exports = mongoose.model("Student", studentSchema);














const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    // 👤 BASIC INFO
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },

    // 🎓 EDUCATION
    education: String,
    degree: String,
    degreeStart: Date,
    degreeEnd: Date,

    // 💼 SKILLS & EXPERIENCE
    skills: [{ type: String }],
    experience: Number,
    projects: [{ type: String }],

    // 🌍 PERSONAL INFO
    location: String,
    dob: Date,

    // 🔗 ONLINE PROFILES
    github: String,
    linkedin: String,
    portfolio: String,

    // 🏢 CURRENT JOB INFO
    company: String,
    position: String,

    // 📄 FILES (store file paths)
    coverLetter:String,
    resume: String,
    profileImage: String,

    // ✅ PROFILE STATUS
    isComplete: { type: Boolean, default: false },

    // 📌 JOBS
    appliedJobs: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Job" }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);