//https://stackoverflow.com/questions/66626936/inquirer-js-populate-list-choices-from-sql-database
// cited code
// Need to figure out how to have 'none' as an option for the manager when creating employees
// I could go over the left join bit

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
    db.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(e.first_name, ' ', e.last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee e ON e.id = employee.manager_id
ORDER BY employee.id`, (err, data) => {
        console.table(data);
        main();
    })
}

function addDepartment () {
    inquirer.prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "What is the name of the new department?",
        }
    ])
    .then((answer) =>{
        db.query(`INSERT INTO department (name) VALUES ("${answer.newDepartment}");`)
        console.log(`\n New department has been added successfully`)
        main();
    })
    
}

const addRole = async () => {
    inquirer.prompt([
        {
            type: "input",
            name: "newRole",
            message: "What is the title of this new role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of this new role?"
        },
        {
            type: "list",
            name: "dept_id",
            message: "Which department does the role belong to?",
            choices: await departmentChoices(),
        }
    ])
    .then((answer) =>{
        db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${answer.newRole}", ${answer.salary}, ${answer.dept_id});`)
        console.log(`\n New department has been added successfully`)
        main();
    })
}

const db2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 's7n&n2tNuV^bzAABAaRj',
    database: 'employees_db'
}).promise();

const departmentChoices = async () => {
    const departmentQuery = `SELECT id AS value, name FROM department;`;
    const departments = await db2.query(departmentQuery);
    return departments[0];
}

async function addEmployee () {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeFirstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "employeeLastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "employeeRole",
            message: "What is the Employee's role?",
            choices: await roleChoices(),
        },
        {
            type: "list",
            name: "employeeManager",
            message: "Who is the employee's manager?",
            choices: await managerChoices() // need to ask about have a 'none' option
        }

    ])
    .then((answer) =>{
        console.log(answer.employeeManager);
        if (answer.employeeManager == 0) {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.employeeFirstName}", "${answer.employeeLastName}", "${answer.employeeRole}", NULL);`)
            console.log(`\n New employee has been added successfully`)
            main();
        } else {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.employeeFirstName}", "${answer.employeeLastName}", "${answer.employeeRole}", "${answer.employeeManager}");`)
            console.log(`\n New employee has been added successfully`)
            main();
        }
        
    })
}

const roleChoices = async () => {
    const roleQuery = `SELECT id AS value, title AS name FROM role;`;
    const role = await db2.query(roleQuery);
    return role[0];
}

const managerChoices = async () => {
    const managerQuery = `SELECT id AS value, CONCAT(first_name, ' ', last_name) AS name FROM employee;`;
    const manager = await db2.query(managerQuery);
    console.log(manager[0]);
    manager[0].push({value: 0, name: 'None' });
    return manager[0];
}

async function updateEmployeeRole () {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeUpdate",
            message: "Which employee's role do you want to update?",
            choices: await updateChoices()
        },
        {
            type: "list",
            name: "updatedRole",
            message: "Which role do you want to assign the selected employee?",
            choices: await updatedRoleChoices()
        }
        
    ])
    .then((answer) => {
        db.query(`UPDATE employee
        SET role_id = ${answer.updatedRole}
        WHERE id = ${answer.employeeUpdate};`)
        console.log(`\n Updated employee's role`)
        main();
    })
}

const updateChoices = async () => {
    const updateQuery = `SELECT id AS value, CONCAT(first_name, ' ', last_name) AS name FROM employee;`;
    const update = await db2.query(updateQuery);
    return update[0];
}

const updatedRoleChoices = async () => {
    const updatedRoleQuery = `SELECT id AS value, title AS name FROM role;`;
    const updatedRole = await db2.query(updatedRoleQuery);
    return updatedRole[0];
}



async function main () {
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
        if (answer.action == "View all employees") {
            viewAllEmployees()
        }
        if (answer.action == "Add a department") {
            addDepartment();
        }
        if (answer.action == "Add a role") {
            addRole();
        }
        if (answer.action == "Add an employee") {
            addEmployee();
        }
        if (answer.action == "Update an employee role") {
            updateEmployeeRole();
        }
        if(answer.action == "Exit") {
            process.exit(1)
        }
    })
}

main();

