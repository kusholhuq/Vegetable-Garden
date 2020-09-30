CREATE PROCEDURE travelDiary()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select group_concat(distinct country) as countries
    from diary;


END
