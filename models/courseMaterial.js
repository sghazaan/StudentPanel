import mongoose, { connect } from "mongoose";

const CourseMaterialSchema = new mongoose.Schema({
  videoLectures: {
    data: Buffer,
    contentType: String
  },
  slides: {
    data: Buffer,
    contentType: String
  },
  handouts: {
    data: Buffer,
    contentType: String
  },
  announcement: {
    type:String,
    required:true
}   
});

const courseMaterial =mongoose.model("courseMaterial",CourseMaterialSchema)

export { courseMaterial };

