CREATE PROCEDURE suspectsInvestigation()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select id, name, surname
    from suspect
    where (name like 'B%' or name like 'b%') and (surname like 'gre_n' or surname like 'Gre_n')     and (height <=170)
    order by id asc;
END
