import Lista from '../models/listas.model.js'
const ListaDAO = {}

ListaDAO.getAll = async () => {
    const clothes = await Clothe.find();
    return clothes;
}

ListaDAO.getOne = async (cd) => {
    const clothe = await Clothe.findOne({ code: cd });
    return clothe
};

ListaDAO.insertClothe = async (clothe) => {
    const clotheSaved = new Clothe(clothe);
    clotheSaved.save();
    return true;
}

ListaDAO.updateClothe = async (cd, clothe) => {
    const clotheUpdated = await Clothe.findOneAndUpdate({ code: cd  }, clothe, { new: true });
    if (clotheUpdated != null)
        return true;
    else
        return false;
}


ListaDAO.deleteClothe = async (cd) => {
    const clotheDeleted = await Clothe.findOneAndDelete({ code: cd  });
    if (clotheDeleted != null)
        return true;
    else
        return false;
}

export default ListaDAO;