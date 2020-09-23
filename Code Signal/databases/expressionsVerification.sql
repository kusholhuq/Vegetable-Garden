CREATE PROCEDURE expressionsVerification()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select id, a, b, operation, c
    from expressions
    where (operation = '+' and a+b=c)
        or (operation = '-' and a-b=c)
        or (operation = '*' and a*b=c)
        or (operation = '/' and a/b=c) ;
END
