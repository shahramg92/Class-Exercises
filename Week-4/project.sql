-- What are all the projects that use JavaScript?



SELECT * FROM project JOIN project_uses_tech ON project_uses_tech.project_id = project.id JOIN tech ON project_uses_tech.tech_id = tech.id WHERE tech.name = 'JavaScript';



-- What are all technologies used by the Personal Website?



SELECT * FROM tech JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id JOIN project ON
project_uses_tech.project_id = project.id WHERE project.name = 'Personal Website';



-- Perform a left outer join from the tech table to the projects_uses_tech table - which has no techs associated project?



SELECT * FROM tech LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id ORDER BY project_id DESC;



-- Based on the previous query, get the count of the number of techs used by each project



SELECT project.name, count(tech_id) AS total FROM project_uses_tech LEFT OUTER JOIN project ON project.id = project_uses_tech.project_id INNER JOIN tech ON tech.id = project_uses_tech.tech_id GROUP BY project.name ORDER BY total DESC;



-- Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?



SELECT * FROM project LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id ORDER BY tech_id DESC;



-- Based on the previous query, get the count of the number of projects that use each tech.



SELECT tech.name, count(project_id) AS total FROM project_uses_tech LEFT OUTER JOIN tech ON tech.id = project_uses_tech.project_id INNER JOIN project ON project.id = project_uses_tech.project_id GROUP BY tech.name ORDER BY total DESC;



-- List all projects along with each technology used by it. You will need to do a three-way join.



SELECT project.name, tech.name FROM project LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id INNER JOIN tech ON tech.id = project_uses_tech.tech_id ORDER BY project.name;



-- List all the distinct techs that are used by at least one project.



SELECT DISTINCT(tech.name) FROM tech LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
INNER JOIN project ON project.id = project_uses_tech.project_id;



-- List all the distinct techs that are not used by any projects.



SELECT * FROM tech LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id WHERE project_id IS NULL;




-- List all the distinct projects that use at least one tech.



SELECT DISTINCT(project.name) FROM project LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id INNER JOIN tech ON tech.id = project_uses_tech.tech_id;



-- List all the distinct projects that use no tech.



SELECT * FROM project LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id WHERE tech_id IS NULL;



-- Order the projects by how many tech it uses.



SELECT project.name, COUNT(tech_id) FROM project LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id INNER JOIN tech ON tech.id = project_uses_tech.tech_id GROUP BY project.name ORDER BY count DESC;



-- Order the tech by how many projects use it.



Select tech.name, COUNT(project_id) FROM project LEFT OUTER JOIN project_uses_tech ON project_uses_tech.project_id = project.id INNER JOIN tech on tech.id = project_uses_tech.tech_id GROUP BY tech.name ORDER BY count DESC;





-- What is the average number of techs used by a project?



SELECT AVG(count) FROM (SELECT tech.id, tech.name, COUNT(tech.id) FROM tech LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id INNER JOIN project ON project.id = project_uses_tech.project_id GROUP BY tech.id) AS tech_counts;



--
