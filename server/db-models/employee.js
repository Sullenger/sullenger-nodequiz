/*
============================================
; Title: NodeQuiz, LLC.
; Author: Jason Sullenger
; Date: 25 September 2019
; Description: Presentation and quiz site - MEAN stack
;===========================================
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeResultsSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  quiz_Name: { type: Schema.Types.ObjectId, ref: "EmployeeHistory" },
  quiz: { type: Object }
});

let employeeHistorySchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  quiz_Name: { type: String },
  employeeQuizResult: [employeeResultsSchema]
});

let employeeSchema = new Schema({
  employeeId: { type: String, required: true },
  userName: { type: String },
  employeeQuizHistory: [employeeHistorySchema]
});

module.exports = mongoose.model("Employee", employeeSchema);
