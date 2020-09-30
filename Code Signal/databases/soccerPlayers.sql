CREATE PROCEDURE soccerPlayers()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
    select group_concat(concat(first_name,' ', surname,' #', player_number)order by player_number separator '; ') as players
    from soccer_team;
END
