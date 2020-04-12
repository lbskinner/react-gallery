CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(255),
"description" VARCHAR(255),
"likes" INTEGER
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0), 
('images/desserts.jpg','I"ve got a sweet tooth.', 0), 
('images/hometown.jpg', 'This is my hometown, Shenyang, China.', 0), 
('images/hotpot.jpg', 'Hotpot is my favorite food and if you haven"t tried it, you are miss out on life!', 0), 
('images/kids.jpg', 'The most precious things in my life.', 0);