CREATE PROCEDURE newsSubscribers()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select subscriber
    from full_year
    where newspaper like '%Daily%'
    UNION
    select subscriber
    from half_year
    where newspaper like '%Daily%'
    group by subscriber
    order by subscriber asc;
END
