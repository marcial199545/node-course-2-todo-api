import { Router, Request, Response } from "express";
const router = Router();
import Todo from "../server/models/Todo";
router
    .route("/todos")
    .get((req: Request, res: Response) => {
        Todo.find()
            .then(todos => {
                res.send({ todos });
            })
            .catch(err => {
                res.status(400).send(err);
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
