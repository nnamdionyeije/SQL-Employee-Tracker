-- SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.first_name
FROM employee 
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
JOIN employee ON employee.manager_id = employee.employee.id;