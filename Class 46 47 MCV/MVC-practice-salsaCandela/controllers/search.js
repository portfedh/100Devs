// Import mongoose schema
const Person = require("../models/person");

// Object to be exported
module.exports = {
  // Serve search page
  getSearch: (req, res) => {
    res.render("search.ejs", { errorText: "" });
  },

  // Search for a record
  searchPerson: async (req, res) => {
    console.log("Search person started");
    try {
      console.log("Try statement started");
      const myId = req.body.id_to_search;
      // Use Mongoose to find the document by _id
      const student = await Person.findById(myId);
      console.log(myId);
      if (!student) {
        console.log("No student record found.");
        res.render("search.ejs", { errorText: "Alumno no encontrado" });
      } else {
        console.log("Record found.");

        //   const today = new Date();
        //   const year = today.getFullYear();
        //   const month = String(today.getMonth() + 1).padStart(2, "0");
        //   const day = String(today.getDate()).padStart(2, "0");
        //   const todayDateString = `${year}-${month}-${day}`;
        //   if (student.last_loggin !== todayDateString) {
        //     var accessButton = "welcome";
        //     var accessText = "Bienvenido";
        //     // Update last_loggin using Mongoose's save method
        //     student.last_loggin = todayDateString;
        //     await student.save();
        //   } else {
        //     var accessButton = "alreadyIn";
        //     var accessText = "Segundo acceso del dia";
        //   }
        //   res.render("search_results.ejs", {
        //     idAlumno: student._id,
        //     firstName: student.first_name,
        //     lastName: student.last_name,
        //     curso: student.curso,
        //     sucursal: student.sucursal,
        //     horario: student.horario,
        //     last_loggin: student.last_loggin,
        //     buttonClass: accessButton,
        //     text: accessText,
        //   });
      }
    } catch (error) {
      console.error("Error while querying MongoDB:", error);
      res.status(500).json({ message: "An error occurred." });
    }
  },
};
