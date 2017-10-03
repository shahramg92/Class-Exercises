CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  distance INTEGER,
  stars INTEGER,
  typeoffood VARCHAR,
  favoritedish VARCHAR,
  doestakeout BOOLEAN,
  lasttimeyouate DATE
);


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
