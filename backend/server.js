
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");


const app = express();

app.use(cors());
app.use(express.json());



const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


pool.connect()
    .then((client) => {
        console.log("Connected to Supabase database");
        client.release();
    })
    .catch((error) => {
        console.error("Database connection failed:", error.message);
    });




app.post("/api/v1/users", async (request, response) => {

    const { name } = request.body;

    if (!name || name.trim() === "") {
        return response.status(400).json({
            error: "Name is required"
        });
    }

    try {

        const result = await pool.query(
            "INSERT INTO users (name) VALUES ($1) RETURNING *",
            [name.trim()]
        );

        response.status(201).json(result.rows[0]);

    } catch (error) {

        console.error("Error saving user:", error);

        response.status(500).json({
            error: "Failed to save user"
        });
    }
});



app.post("/api/v1/results", async (request, response) => {

    const { name, score, totalQuestions } = request.body;

    if (!name || name.trim() === "") {
        return response.status(400).json({
            error: "Name is required"
        });
    }

    if (
        typeof score !== "number" ||
        typeof totalQuestions !== "number"
    ) {
        return response.status(400).json({
            error: "Score and total questions are required"
        });
    }

    const percentage = Math.round(
        (score / totalQuestions) * 100
    );

    try {

        const result = await pool.query(
            `INSERT INTO results
            (name, score, total_questions, percentage)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [
                name.trim(),
                score,
                totalQuestions,
                percentage
            ]
        );

        response.status(201).json(result.rows[0]);

    } catch (error) {

        console.error("Error saving result:", error);

        response.status(500).json({
            error: "Failed to save quiz result"
        });
    }
});



app.get("/", (request, response) => {
    response.send("NYSC Quiz API is running");
});



const port = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});