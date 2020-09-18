CREATE PROCEDURE gradeDistribution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select Name, ID
    from grades
    where 2*final > midterm1+midterm2
    order by left(name, 3) ASC, id asc;
END
