CREATE PROCEDURE countriesSelection()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    SELECT name, continent, population
    FROM countries
    WHERE continent='Africa';
END
