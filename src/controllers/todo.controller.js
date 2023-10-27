import models from './models';
import { Sequelize, Op } from 'sequelize';

const sendHttp = (res, statusCode) => {
    const messages = {
        500: '500 Internal Server Error',
        404: '404 Not Found',
        400: '400 Bad Request',
        200: '200 OK',
    };
    return res.status(statusCode).send(messages[String(statusCode)] || 'Some error occured');
};

const { Todo } = models;
const dateFormatter = [Sequelize.fn('DATE_FORMAT', Sequelize.col('createdAt'), '%d-%m-%Y %H:%i:%S'), 'createdAt'];

const findAll = (req, res) => {
    const { title } = req.query;
    const constraints = title ? { title: { [Op.like]: `%${title}%` } } : null;
    const todoList = Todo.findAll({ where: constraints })
        .then((todoList) => res.send(todoList))
        .catch((err) => {
            sendHttp(res, 500);
        });
};
const findById = (req, res) => {
    const { id } = req.params;

    Todo.findByPk(id)
        .then((todo) => {
            if (todo) {
                res.send(todo);
            } else {
                sendHttp(res, 404);
            }
        })
        .catch((err) => {
            sendHttp(res, 500);
        });
};
const create = (req, res) => {
    const { title, description, completed } = req.body;
    if (!title) {
        sendHttp(res, 400);
        return;
    }

    const newTodo = {
        title,
        description,
        completed: completed ?? false,
    };

    Todo.create(newTodo)
        .then((todo) => {
            res.send(todo);
        })
        .catch((err) => {
            sendHttp(res, 500);
        });
};
const update = (req, res) => {
    const { id } = req.params;
    Todo.update(req.body, {
        where: { id },
    })
        .then((num) => {
            if (num == 1) {
                sendHttp(res, 200);
            } else {
                sendHttp(res);
            }
        })
        .catch((err) => {
            sendHttp(res, 500);
        });
};
const remove = (req, res) => {
    const { id } = req.params;
    Todo.destroy(req.body, {
        where: { id },
    })
        .then((num) => {
            if (num == 1) {
                sendHttp(res, 200);
            } else {
                sendHttp(res);
            }
        })
        .catch((err) => {
            sendHttp(res, 500);
        });
};
const clear = (req, res) => {
    Todo.destroy(req.body, {
        where: {},
        truncate: false,
    })
        .then((num) => {
            sendHttp(res, 200);
        })
        .catch((err) => {
            sendHttp(res, 500);
        });
};
