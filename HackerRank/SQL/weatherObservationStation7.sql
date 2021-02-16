SELECT city FROM station
WHERE RIGHT(city, 1) = "a" OR RIGHT(city, 1) = "e" OR RIGHT(city, 1) = "i" OR RIGHT(city, 1) = "o" OR RIGHT(city, 1) = "u"
GROUP BY city;
