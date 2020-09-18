CREATE PROCEDURE mischievousNephews()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    /* add a new column to the table, that takes the date and turns it into a day, and
    turns that day into a number */
    select weekday(mischief_date) as weekday, mischief_date, author, title
    from mischief
    order by weekday, length(author), author, mischief_date, title;
END
