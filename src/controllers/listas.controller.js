import { model } from 'mongoose';
import ListaDAO from '../dao/listas.dao.js'

//Nos muestra todos los elementos disponibles en la BD
export const getAll = (req, res) => {
    ListaDAO.getAll()
        .then((listas) => {
            res.json(listas);
        })
        .catch((err) => {
            res.json(err);
        });
};

export const getOne = (req, res) => {
    ListaDAO.getOne(req.params.code)
        .then((lista) => {
            if (lista != null)
            res.json(lista);
            else
                res.json({ status: "List not found" })
        })
        .catch(err => res.json({ status: "Server unaivalible",message:err }))
}

//Nos muestra todos los elementos disponibles en la BD
export const insertLista = (req, res) => {
    ListaDAO.insertLista(req.body)
        .then(result => {
            if (result)
            res.json(result);
        })
        .catch(err => res.json({ status: "Servidor no disponible" }));
};


export const updateLista = (req, res) => {
    ListaDAO.updateLista(req.params.code, req.body)

        .then(lista => {
            if (lista)
            res.json(lista);
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};


export const deleteLista = (req, res) => {
    ClotheDAO.deleteLista(req.params.code)

        .then(lista => {
            if (lista)
            res.json(lista);
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};
