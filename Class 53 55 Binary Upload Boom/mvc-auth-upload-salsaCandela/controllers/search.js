// Import mongoose schema
const Person = require("../models/person");
const PartyPerson = require("../models/partyPerson");
const Date = require("../models/checkDate");

// Object to export
module.exports = {
  getPartySearch: (req, res) => {
    // Render search page
    res.render("party_search.ejs", { errorText: "" });
  },

  searchPartyPerson: async (req, res) => {
    try {
      // Get ID to search
      const myId = req.body.id_to_search;
      // Search for ID in database
      const student = await PartyPerson.find({ access_id: myId });
      console.log("Resultado");
      console.log(student);
      // If not found, render response
      if (student.length === 0) {
        res.render("party_search.ejs", { errorText: "Registro no encontrado" });
      } else {
        // If found, check access:
        console.log("Record found.");
        const checkAccess = student[0].accessed;
        if (checkAccess === false) {
          // Variables is access granted
          var accessButton = "welcome";
          var accessText = "Bienvenido";
          // Update access
          student[0].accessed = true;
          await student[0].save();
        } else {
          // Variables if access denied
          var accessButton = "alreadyIn";
          var accessText = "Acceso Anterior";
        }
        // Render response
        res.render("party_search_results.ejs", {
          idAlumno: student[0].access_id,
          firstName: student[0].first_name,
          lastName: student[0].last_name,
          email: student[0].email,
          cel: student[0].cel,
          createdAt: student[0].createdAt,
          buttonClass: accessButton,
          text: accessText,
        });
      }
    } catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ message: "An error occurred." });
    }
  },

  searchClassPerson: async (req, res) => {
    try {
      // Get ID to search
      const myId = req.body.id_to_search;
      // Search for ID in database
      const student = await Person.findById(myId);
      // If not found, render response
      if (!student) {
        res.render("class_search.ejs", { errorText: "Alumno no encontrado" });
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
        res.render("class_search_results.ejs", {
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
