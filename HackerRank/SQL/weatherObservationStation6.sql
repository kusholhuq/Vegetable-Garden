SELECT city FROM station
WHERE LEFT(city, 1) = "a" OR LEFT(city, 1) = "e" OR LEFT(city, 1) = "i" OR LEFT(city, 1) = "o" OR LEFT(city, 1) = "u"
GROUP BY city;
