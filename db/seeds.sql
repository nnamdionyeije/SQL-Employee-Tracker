USE employees_db;

INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Sales");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 100000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 60000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 250000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 190000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Attorney", 150000, 3);



INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Nnamdi", "Onyeije", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Lyndon", "Johnson", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Abraham", "Lincoln", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Kennedy", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jimmy", "Carter", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Gerald", "Ford", 5, NULL);



