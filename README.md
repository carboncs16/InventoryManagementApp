# InventoryManagementApp
A small MEAN Stack web application on Inventory Management.
The service uses Node.js-Express.js for creating RESTful service so that it can be directly consumed by any Frontend framework. It has also integrated JWT token based authentication system to provide authentication and authorization of REST endpoints to authenticated users only(logged in users).

The frontend uses Angular 8 framework for comsuming REST endpoints, representating the data that is captured from the response of endpoints and manipulating user inputs(like validations, routings, events, etc.). Bootstrap-4 is used to make CSS layout and design purpose.

Instructions:
1. This project contains a Web based MEAN Stack application
2. To run the Node-Express service:
    a. Please install Node.js(latest version) and mongodb in your pc.
    b. Perform 'npm install' command under 'InventoryManagementService' folder.
    c. Run 'mongod' command in a separate Command Prompt instance.
    d. Make sure the port on which mongodb server is running is '27017'.
    e. Run 'node index.js' command under 'InventoryManagementService' folder.
    f. After performing the above step, the service should up and running in port '7000'.
3. To run the Angular application:
    a. Make sure you have the latest version of Node.js and Angular 8(globally installed).
    b. Perform 'npm install' command under 'InventoryManagementUI' folder.
    c. Run 'ng serve' command under 'InventoryManagementUI' folder.
    d. After performing the above step, the Web app should be upp and running in port '4200'.
