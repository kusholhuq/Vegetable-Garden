CREATE PROCEDURE itemCounts()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select item_name, item_type, count(*) as item_count
    from availableItems
    group by item_name, item_type
    order by item_type, item_name asc;
END
