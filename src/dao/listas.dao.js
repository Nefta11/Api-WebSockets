import Lista from '../models/listas.model.js'
const ListaDAO = {}

ListaDAO.getAll = async () => {
    const listas = await Lista.find();
    return listas;
}

ListaDAO.getOne = async (cd) => {
    const lista = await Lista.findOne({ code: cd });
    return lista
};

ListaDAO.insertClothe = async (lista) => {
    const listaSaved = new Lista(lista);
    listaSaved.save();
    return true;
}

ListaDAO.updateClothe = async (cd, lista) => {
    const listaUpdated = await Lista.findOneAndUpdate({ code: cd  }, lista, { new: true });
    if (listaUpdated != null)
        return true;
    else
        return false;
}


ListaDAO.deleteLista = async (cd) => {
    const listaDeleted = await Lista.findOneAndDelete({ code: cd  });
    if (listaDeleted != null)
        return true;
    else
        return false;
}

export default ListaDAO;