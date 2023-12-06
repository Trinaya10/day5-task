// Define resume data using JSON
var resumeData = {
    "personalInfo": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "(555) 123-4567",
      "address": "123 Main St, Cityville"
    },
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "school": "University of Example",
        "year": 2020
      },
      {
        "degree": "High School Diploma",
        "school": "City High School",
        "year": 2016
      }
    ],
    "experience": [
      {
        "position": "Software Developer",
        "company": "Tech Solutions Inc.",
        "year": "2021-present",
        "responsibilities": [
          "Developing web applications using JavaScript, HTML, and CSS",
          "Collaborating with cross-functional teams",
          "Testing and debugging software"
        ]
      },
      {
        "position": "Intern",
        "company": "Code Labs",
        "year": "2020-2021",
        "responsibilities": [
          "Assisting with software development projects",
          "Learning and implementing best coding practices"
        ]
      }
    ],
    "skills": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React",
      "Node.js",
      "Git",
      "Agile development",
      "Problem-solving"
    ]
  };
  
  // Convert the JSON data to a string for storage or transmission
  var resumeJsonString = JSON.stringify(resumeData);
  
  // Output the JSON string
  console.log(resumeJsonString);
  