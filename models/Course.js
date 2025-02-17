const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  nameCourse: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Course", CourseSchema);
