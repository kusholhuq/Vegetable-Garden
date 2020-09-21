CREATE PROCEDURE securityBreach()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select first_name, second_name, attribute
    from users
    where attribute like binary concat('_%\%', users.first_name, '\_',users.second_name,'\%%')
    order by attribute asc;
END
