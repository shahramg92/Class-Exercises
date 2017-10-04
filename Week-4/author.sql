CREATE TABLE author (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);


CREATE TABLE article (
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  author_id INTEGER REFERENCES author (id)
);
