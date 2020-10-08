CREATE PROCEDURE countriesInfo()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select count(name) as number, avg(population) as average, sum(population) as total
    from countries;
END
