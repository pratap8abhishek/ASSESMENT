const express = require("express");
const { Worker } = require("worker_threads");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Use multer to store file in memory instead of disk
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API to handle file upload and process it in a worker thread
router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const worker = new Worker(path.join(__dirname, "../workers/uploadWorker.js"), {
    workerData: { fileBuffer: req.file.buffer, fileName: req.file.originalname },
  });

  worker.on("message", (message) => res.json({ message }));
  worker.on("error", (error) => res.status(500).json({ error: error.message }));
});

module.exports = router;


