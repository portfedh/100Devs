// Import mongoose schema
const Person = require("../models/person");
const Date = require("../models/checkDate");

// Object to export
module.exports = {
  getSearch: (req, res) => {
    // Render search page
    res.render("search.ejs", { errorText: "" });
  },
  searchPerson: async (req, res) => {
    try {
      // Get ID to search
      const myId = req.body.id_to_search;
      // Search for ID in database
      const student = await Person.findById(myId);
      // If not found, render response
      if (!student) {
        res.render("search.ejs", { errorText: "Alumno no encontrado" });
      } else {
        // If found, check access:
        console.log("Record found.");
        const checkAccess = Date.checkDate(student.last_loggin);
        if (checkAccess) {
          // Variables is access granted
          var accessButton = "welcome";
          var accessText = "Bienvenido";
          // Update last_login
          student.last_loggin = Date.getToday();
          await student.save();
        } else {
          // Variables if access denied
          var accessButton = "alreadyIn";
          var accessText = "Segundo acceso del dia";
        }
        // Render response
        res.render("search_results.ejs", {
          idAlumno: student._id,
          firstName: student.first_name,
          lastName: student.last_name,
          curso: student.curso,
          sucursal: student.sucursal,
          horario: student.horario,
          last_loggin: student.last_loggin,
          buttonClass: accessButton,
          text: accessText,
        });
      }
    } catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ message: "An error occurred." });
    }
  },
};
