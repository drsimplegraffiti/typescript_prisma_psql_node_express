import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5656;

app.use(express.json());

app.get("/home", (req: Request, res: Response) => {
    res.json({ message: 'Hello world' })
});


// get all jokes
app.get("/", async (req, res) => {
    const jokes = await prisma.joke.findMany({
        include: { creator: true }
    });
    res.json({ jokes });
})


//create a joke
app.post("/", async (req, res) => {
    const joke = await prisma.joke.create({
        data: {
            text: req.body.text,
            userId: req.body.userId
        }
    });

    res.json({ joke })
});

// get a single joke
app.get("/:joke_id", async (req, res) => {
    const joke_id = req.params.joke_id

    const joke = await prisma.joke.findUnique({
        where: { id: joke_id }
    })

    res.json({ joke })
});

//delete a joke 
app.delete("/:joke_id", async (req, res) => {
    const { joke_id } = req.params;
    const deleteJoke = await prisma.joke.delete({
        where: {
            id: joke_id,
        },
    })
    res.json({ message: 'Joke deleted successfully' })
});

//update joke
app.put("/:joke_id", async (req, res) => {
    const { joke_id } = req.params;

    const updateJoke = await prisma.joke.update({
        where: {
            id: joke_id,
        },
        data: {
            text: req.body.text,
        },
    });

    res.json({ updateJoke });
})
app.listen(port, () => {
    console.log("listening on port " + port)
})