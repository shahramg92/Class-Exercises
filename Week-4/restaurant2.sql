-- List all the reviews for a given restaurant given a specific restaurant ID



SELECT restaurant_id, review
	FROM review
	ORDER BY restaurant_id;



-- List all the reviews for a given restaurant, given a specific restaurant name



SELECT restaurant.name, review.review FROM review
	INNER JOIN restaurant ON restaurant.id = review.restaurant_id
	WHERE restaurant.name = 'El Tiempo Cantina' ;



-- List all the reviews for a given reviewer, given a specific author name



SELECT reviewer.name, review.review FROM review
	INNER JOIN reviewer ON reviewer.id = review.restaurant_id
	WHERE reviewer.name = 'Leopoldo Uchida';




-- List all the reviews along with the retaurant they were written for. In the query result, select the restaurant name and the review text



SELECT restaurant.name, review.review FROM review
	INNER JOIN restaurant ON restaurant.id = review.restaurant_id
	ORDER BY restaurant.name;



-- Get the average stars by restaurant. The result should have the restaurant name and its average star rating



SELECT restaurant.name, AVG(review.stars)
AS avg_stars FROM restaurant
INNER JOIN review
ON restaurant.id = review.restaurant_id
GROUP BY restaurant.name;



-- Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count



SELECT review.review,



-- List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer's name. Hint: you will need to do a three-way join -i.e joining all three tables together



SELECT restaurant.name, reviewer.name, review.review FROM restaurant
INNER JOIN review
ON restaurant.id = review.restaurant_id
INNER JOIN reviewer
ON reviewer.id = review.reviewer_id
ORDER BY restaurant.name;



-- Get the average stars given by each reviewer. (reviewer name, average star rating)



SELECT reviewer.name, AVG(review.stars)
AS avg_stars FROM reviewer
INNER JOIN review
ON reviewer.id = review.restaurant_id
GROUP BY reviewer.name;



-- Get the lowest star rating given by each reviewer (reviewer name, average star rating)



SELECT reviewer.name, MIN(review.stars)
AS min_stars FROM reviewer
INNER JOIN review
ON reviewer.id = review.restaurant_id
GROUP BY reviewer.name
ORDER BY min_stars;



-- Get the number of restaurants in each category (category name, restaurant count)



SELECT restaurant.category, COUNT(restaurant.id)
AS restaurant_count FROM restaurant
GROUP BY restaurant.category
ORDER BY restaurant_count DESC;




-- Get the number of 5 star reviews given by restaurant (reviewer name, lowest star rating)



SELECT DISTINCT(restaurant.name), COUNT(review.stars) FROM restaurant
INNER JOIN review
ON review.restaurant_id = restaurant.id
WHERE review.stars = 5
GROUP BY restaurant.name, review.stars;



-- Get the average star rating for a food category (category name, average star rating)



SELECT restaurant.category, AVG(review.stars) FROM restaurant
INNER JOIN review
ON review.restaurant_id = restaurant.id
GROUP BY restaurant.category, review.stars
ORDER BY review.stars DESC;



--
