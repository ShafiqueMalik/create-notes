import mongoose from "mongoose";

const homeSchema = mongoose.Schema({
    sectionTitle: { type: String},
    sectionSubtitle: { type: String},
    name: {
        first: { type: String,  default: "Shafique" },
        last: { type: String,  default: "Malik" }
    },
    designation: { type: String,  default: "Front End Developer" },
    description: { type: String, default: `Professionally connected with the web development industry and information technology for many years. Interested in the entire frontend spectrum and working on ambitious projects with positive people.` },
    profileImage: { type: String },
    createAt: {
        type: Date,
        default: new Date()
    }
});

const HomeModel = mongoose.model("Home", homeSchema);
export default HomeModel;