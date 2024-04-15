import Clothe from '../models/listas.model.js'
const ClotheDAO = {}

ClotheDAO.getAll = async () => {
    const clothes = await Clothe.find();
    return clothes;
}

ClotheDAO.getOne = async (cd) => {
    const clothe = await Clothe.findOne({ code: cd });
    return clothe
};

ClotheDAO.insertClothe = async (clothe) => {
    const clotheSaved = new Clothe(clothe);
    clotheSaved.save();
    return true;
}

ClotheDAO.updateClothe = async (cd, clothe) => {
    const clotheUpdated = await Clothe.findOneAndUpdate({ code: cd  }, clothe, { new: true });
    if (clotheUpdated != null)
        return true;
    else
        return false;
}


ClotheDAO.deleteClothe = async (cd) => {
    const clotheDeleted = await Clothe.findOneAndDelete({ code: cd  });
    if (clotheDeleted != null)
        return true;
    else
        return false;
}

export default ClotheDAO;