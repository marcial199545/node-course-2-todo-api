import { Router, Request, Response } from "express";
import { ObjectID } from "mongodb";
const router = Router();
import Todo from "../server/models/Todo";
router
    .route("/todos/:id")
    .get((req: Request, res: Response) => {
        const { id } = req.params;
        if (!ObjectID.isValid(id)) {
            console.log("TLC: Error §§§§> ID is not valid");
            return res.status(404).render("errorPage", { err: "ID is not valid" });
        }
        Todo.findById(id)
            .then(todo => {
                if (!todo) {
                    console.log("TLC: Error §§§§> ID not found");
                    return res.status(404).render("errorPage", { err: "ID not found" });
                }
                res.send({ todo });
            })
            .catch(err => {
                res.status(400).send({});
            });
    })
    .post(async (req: Request, res: Response) => {
        let todo = new Todo({
            text: req.body.text
        });
        todo.save().then(
            result => {
                res.send(result);
            },
            err => {
                res.status(400).send(err.message);
            }
        );
        console.log(req.body);
    });
export default router;
