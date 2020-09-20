CREATE PROCEDURE suspectsInvestigation2()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select id, name, surname
    from suspect
    where height <=170 or (surname not like 'Gre_n' or surname not like 'gre_n') or (name not       like 'b%' or name not like 'B%')
    order by id asc;
END
