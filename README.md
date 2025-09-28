Smart Learning Platform
=======================

**Version:** 1.0.0**Backend:** Node.js (User Service & Course Service)**Database:** PostgreSQL**Authentication:** JWT & Session-based**Documentation:** Swagger (OpenAPI 3.0)**Dockerized:** Yes

**Project Overview**
--------------------

The **Smart Learning Platform** is a modern learning management system backend. It allows:

*   **Students:** Enroll in courses, view personalized dashboards.
    
*   **Teachers:** Create, manage courses and assignments.
    
*   **Admin:** Access analytics and manage users.
    

The platform is designed to be **secure, scalable, and cloud-ready**, following modern backend practices.

**Architecture**
----------------

The project is split into **two microservices**:

1.  **User Service**
    
    *   Handles user management (students, teachers, admins).
        
    *   Features: JWT login, Session login, Role-based access, User CRUD, Logging.
        
2.  **Course Service**
    
    *   Handles courses and enrollments.
        
    *   Features: Course CRUD, Enrollment, Recommendations (Promises & Async/Await), Analytics, API key protected endpoints.
        

**Folder Structure**
--------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Smartlearn/  ├── user-service/  │ ├── controllers/  │ ├── middleware/  │ ├── models/  │ ├── routes/  │ ├── logs/  │ ├── app.js  │ ├── package.json  | ├── package-lock.json  │ ├── Dockerfile  │ └── swagger/  └── course-service/  ├── controllers/  ├── middleware/  ├── models/  ├── routes/  ├── logs/  ├── utils/  ├── swagger/  ├── mockCourses.json  ├── app.js  ├── package.json  ├── package-lock.json  └── Dockerfile   `

**Features**
------------

### User Service

*   JWT & Session-based authentication
    
*   Role-based access control (student, teacher, admin)
    
*   User CRUD endpoints
    
*   HATEOAS links for responses
    
*   Logging for requests & errors
    
*   Swagger API documentation
    

### Course Service

*   Course CRUD endpoints
    
*   Student enrollment
    
*   Recommendations endpoint (Promises & Async/Await)
    
*   Analytics endpoint (API key + Admin only)
    
*   Rate limiting on recommendation endpoints
    
*   Logging & error handling
    
*   Swagger API documentation
    

**Environment Setup**
---------------------

1.  **Clone the repository**
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com//SmartLearningPlatform.git  cd SmartLearningPlatform   `

1.  **Create a .env file** in each service:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   DB_USER=your_db_user  DB_PASSWORD=your_db_password  DB_HOST=localhost  DB_PORT=5432  DB_NAME=smartlearn  JWT_SECRET=your_jwt_secret  SESSION_SECRET=your_session_secret  API_KEY=your_custom_api_key  PORT=4000 # User Service  PORT=5000 # Course Service   `

1.  **Install dependencies**
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd user-service  npm install  cd ../course-service  npm install   `

1.  **Run PostgreSQL & create databases**
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   CREATE DATABASE smartlearn;  -- Create tables as per user-service and course-service models   `

**Run Services**
----------------

### User Service

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd user-service  node app.js  # Running on port 4000   `

### Course Service

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd course-service  node app.js  # Running on port 5000   `

**Docker (Optional)**
---------------------

1.  Build Docker images:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   docker build -t smart-user-service ./user-service  docker build -t smart-course-service ./course-service   `

1.  Run containers:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   docker run -p 4000:4000 smart-user-service  docker run -p 5000:5000 smart-course-service   `

**API Documentation**
---------------------

*   Browse Swagger UI:
    
    *   User Service: http://localhost:4000/api-docs
        
    *   Course Service: http://localhost:5000/api-docs
        
*   Includes all endpoints with request/response examples.
    

**Example Endpoints**
---------------------

### User Service

EndpointMethodDescription/users/signinPOSTRegister a new user/users/login-jwtPOSTJWT-based login/users/login-sessionPOSTSession-based login/users/profileGETGet user profile (session protected)/users/all-usersGETAdmin only: List all users

### Course Service

EndpointMethodDescription/coursesGETList all courses/coursesPOSTCreate a new course/courses/{id}/enrollPOSTEnroll student/courses/recommendationsGETRecommendations (Promises)/courses/recommendations-asyncGETRecommendations (Async/Await)/courses/analyticsGETAdmin + API key only

**Commit & Branching Strategy (Optional)**
------------------------------------------

*   **feat:** New features (e.g., login, course creation)
    
*   **chore:** Non-feature tasks (e.g., adding middleware, logging)
    
*   **fix:** Bug fixes
    
*   **final branch:** Contains all missing files and final project structure
