const inquirer = require('inquirer');
const mysql = require('mysql2');
require("console.table");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's7n&n2tNuV^bzAABAaRj',
    database: 'employees_db'
})

function viewAllDepartments () {
    db.query("SELECT * FROM department", (err, data) => {
        console.table(data);
        main();
    })
}

function viewAllRoles () {
    db.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id;", (err, data) => {
        console.table(data);
        main();
    })     
}

function viewAllEmployees () {

}

function addDepartment () {

}

function addRole () {

}

function addEmployee () {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of this new employee"
        }
    ])
}

function updateEmployeeRole () {

}

function main () {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"
        ]
    })
    .then(answer => {
        if (answer.action == "View all departments") {
            viewAllDepartments()
        }
        if (answer.action == "View all roles") {
            viewAllRoles()
        }
        if(answer.action == "Exit") {
            process.exit(1)
        }
    })
}

main();