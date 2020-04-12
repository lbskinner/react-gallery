const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  pool
    .query(queryText, [galleryId])
    .then((responseFromDb) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`PUT ERROR: ${error}`);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY "id";`;
  pool
    .query(queryText)
    .then((responseFromDb) => {
      console.log(responseFromDb.rows);
      res.send(responseFromDb.rows);
    })
    .catch((error) => {
      console.log(`GET ERROR: ${error}`);
      res.sendStatus(500);
    });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
  const newGalleryItem = req.body;
  const queryText = `INSERT INTO "gallery" ("path", "description", "likes") 
        VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [newGalleryItem.path, newGalleryItem.description, 0])
    .then((responseFromDb) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`POST ERROR: ${error}`);
      res.sendStatus(500);
    });
}); // END POST Route

// DELETE Route
router.delete("/:id", (req, res) => {
  const galleryId = req.params.id;
  const queryText = `DELETE FROM "gallery" WHERE "id" = $1;`;
  pool
    .query(queryText, [galleryId])
    .then((responseFromDb) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`DELETE ERROR: ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
