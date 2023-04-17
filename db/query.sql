-- SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(e.first_name, ' ', e.last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee e ON e.id = employee.manager_id
ORDER BY employee.id


-- SELECT 
--     CONCAT(managerTable.first_name, ' ', managerTable.last_name) AS manager
-- FROM managerTable

-- INNER JOIN employee b ON b.manager_id = employee.id
-- ORDER BY employee.id;


-- SELECT IFNULL (CONCAT (a.last_name, ', ', a.first_name), 'NULL') AS 'Name', CONCAT(b.first_name, ' ', b.last_name) AS 'Manager' 
-- FROM employee a 
-- LEFT JOIN employee b ON b.id = a.manager_id ORDER BY Manager DESC;