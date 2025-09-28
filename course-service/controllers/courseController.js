const Course = require('../models/courseModel');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const getCourses = async (req, res) => {
  const { page = 1, limit = 5, category, sort } = req.query;
  try {
    const courses = await Course.getAll({ category }, sort, page, limit);

    const coursesWithTeacher = await Promise.all(courses.map(async c => {
      try {
        const teacherRes = await axios.get(`http://localhost:4000/users/${c.teacher_id}`);
        return {
          ...c,
          teacher: teacherRes.data,
          links: {
            self: `/courses/${c.course_id}`,
            enroll: `/courses/${c.course_id}/enroll`
          }
        };
      } catch {
        return {
          ...c,
          teacher: null,
          links: {
            self: `/courses/${c.course_id}`,
            enroll: `/courses/${c.course_id}/enroll`
          }
        };
      }
    }));
    res.json({ page: Number(page), limit: Number(limit), courses: coursesWithTeacher });
  } catch(err) {
    fs.appendFileSync(path.join(__dirname,'../logs/app.log'), `[ERROR] ${new Date().toISOString()} | ${err.message}\n`);
    res.status(500).json({ error: err.message });
  }
};
const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch(err) {
    fs.appendFileSync(path.join(__dirname,'../logs/app.log'), `[ERROR] ${new Date().toISOString()} | ${err.message}\n`);
    res.status(500).json({ error: err.message });
  }
};
const enrollStudent = async (req, res) => {
  try {
    const { courseId } = req.params;
    const studentId = req.body.studentId;
    const enrollment = await Course.enrollStudent(courseId, studentId);
    res.status(201).json(enrollment);
  } catch(err) {
    fs.appendFileSync(path.join(__dirname,'../logs/app.log'), `[ERROR] ${new Date().toISOString()} | ${err.message}\n`);
    res.status(500).json({ error: err.message });
  }
};
const getRecommendations = (req, res) => {
  const mockData = require('../mockCourses.json');
  res.json(mockData);
};
const getRecommendationsAsync = async (req, res) => {
  try {
    const mockData = require('../mockCourses.json');
    res.json(mockData);
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = { getCourses, createCourse, enrollStudent, getRecommendations, getRecommendationsAsync };
