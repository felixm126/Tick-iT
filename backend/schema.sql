DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS venues;

CREATE TABLE venues (
  id SERIAL PRIMARY KEY,
  venue_name VARCHAR(100),
  street_address VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip_code VARCHAR(100),
  venue_type VARCHAR(200),
  venue_img VARCHAR
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  venue_id INTEGER,
  event_name VARCHAR(100),
  event_type VARCHAR(100),
  event_host VARCHAR(100),
  event_time VARCHAR(100),
  event_date VARCHAR(100),
  event_img VARCHAR,

  ticket_price_min INTEGER,
  ticket_price_max INTEGER,
);