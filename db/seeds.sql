USE employees_db;

INSERT INTO department (id, name) VALUES (1, "Engineering");
INSERT INTO department (id, name) VALUES (2, "Finance");
INSERT INTO department (id, name) VALUES (3, "Legal");
INSERT INTO department (id, name) VALUES (4, "Sales");

INSERT INTO role (id, title, salary, department_id) VALUES (1, "Sales Lead", 100000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (2, "Salesperson", 60000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (3, "Lead Engineer", 50000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (4, "Software Engineer", 200000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, "Nnamdi", "Onyeije", 2, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, "John", "Carter", 3, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, "Abraham", "Lincoln", 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, "John", "Kennedy", 4, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, "Jimmy", "Carter", 4, 1);


