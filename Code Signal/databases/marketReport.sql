CREATE PROCEDURE marketReport()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select ifnull(country, 'Total:') as country, count(country) as competitors
    from foreignCompetitors
    group by country with rollup;

END
