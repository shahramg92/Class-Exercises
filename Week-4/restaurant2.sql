CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  address VARCHAR,
  category VARCHAR
);

--

CREATE TABLE reviewer (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  karma INT DEFAULT 0 CHECK (karma <=7 AND karma >=0)
);

--

CREATE TABLE review (
  id SERIAL NOT NULL PRIMARY KEY,
  reviewer_id INTEGER REFERENCES reviewer (id),
  stars INT DEFAULT 1 CHECK (stars <= 5 AND stars >= 1),
  title VARCHAR,
  review VARCHAR,
  restaurant_id INTEGER REFERENCES restaurant (id)
);

--
