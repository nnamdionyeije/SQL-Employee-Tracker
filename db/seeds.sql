USE employees_db;

INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Sales");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 100000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 60000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 200000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Nnamdi", "Onyeije", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Carter", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Abraham", "Lincoln", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Kennedy", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jimmy", "Carter", 4, 1);


