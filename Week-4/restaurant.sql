CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  distance INTEGER,
  stars NUMERIC(3,2),
  typeoffood VARCHAR UNIQUE NOT NULL,
  favoritedish VARCHAR UNIQUE NOT NULL,
  doestakeout BOOLEAN DEFAULT FALSE,
  lasttimeyouate DATE NOT NULL
);

--

INSERT INTO restaurant VALUES (
  DEFAULT, 'Shahrams Pizza Restaurant', 35, 4.9, 'Pizza', 'Mushroom Pizza', TRUE, '2017-05-10'
);

--

INSERT INTO restaurant VALUES (
  DEFAULT, 'Barneys Italian Cuisine', 15, 4.45, 'Italian', 'Chicken Marsala', FALSE, '2017-08-07'
);

--

INSERT INTO restaurant VALUES (
  DEFAULT, 'Tornado Burger', 30, 4.6, 'Burgers', 'Double meat double cheese spicy burger', TRUE, '2017-09-23'
);

--

INSERT INTO restaurant VALUES (
  DEFAULT, 'Bobs Big Daddy BBQ', 10, 3.1, 'BBQ', 'Smoked Briskey', FALSE, '2015-02-03'
);

--


INSERT INTO restaurant VALUES (
  DEFAULT, 'Leroy Jenkins Unbelievable Sushi Bar', 5, 5.0, 'Sushi', 'Mt Fuji Sushi Roll', TRUE, '2017-10-03'
);

--

SELECT * FROM restaurant WHERE stars >= 5;

-- Names of restaurants with 5 stars

SELECT * FROM restaurant WHERE stars =5 ORDER BY favoritedish;

-- The favorite dishes of all 5-star restaurants

SELECT * FROM restaurant WHERE name = 'Tornado Burger' ORDER BY id;

-- The ID of a restaurant by a specific restaurant name

SELECT * FROM restaurant WHERE typeoffood LIKE '%BBQ%';

-- Restaurant in the category of BBQ

SELECT * FROM restaurant WHERE doestakeout IS TRUE;

-- Restaurant that do take out

SELECT * FROM restaurant WHERE doestakeout IS TRUE AND typeoffood = 'BBQ';

-- Restaurant that do take out and category of BBQ

SELECT * FROM restaurant WHERE distance <= 2;

-- Restaurants that are within 2 miles

SELECT * FROM restaurant WHERE lasttimeyouate >= (NOW() - interval '1 week');

-- Restaurants that you haven't ate at in the last week

SELECT * FROM restaurant WHERE lasttimeyouate >= (NOW() - interval '1 week') AND stars =5;

--Restaurants that you haven't ate at in the last week and has 5 stars

SELECT * FROM restaurant ORDER BY distance;

-- List restaurants by the closest distance

SELECT * FROM restaurant ORDER BY distance LIMIT 2;

-- List the top 2 restaurants by distance

SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

-- LISt the top 2 restaurants by stars

SELECT * FROM restaurant WHERE distance <= 2 ORDER BY stars DESC LIMIT 2;

-- List the top 2 restaurants by stars where the distance is less than 2 miles

SELECT COUNT(*) FROM restaurant;

--Count the number of restaurants in the DB

SELECT typeoffood, COUNT(*) FROM restaurant GROUP BY typeoffood;

--Count the number of restaurants by category

SELECT typeoffood, AVG(stars) FROM restaurant GROUP BY typeoffood;

-- Get the average stars per restaurant by category

SELECT name, MAX(stars) FROM restaurant GROUP BY name;

-- Get the max stars of a restaurant by category
