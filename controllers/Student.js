let single = async (req, res) => {
    console.log(req.file)

    res.status(201).json({
        message: "Single image added successfylly"
    })
}

const multiple = async (req, res) => {
    console.log(req.files);

    res.status(201).json({
        message: "Multiple images added successfully"
    });
}

const fields = async (req, res) => {
    console.log(req.files);

    res.status(201).json({
        message: "Fields images added successfully"
    });
}


module.exports = {
    single,
    multiple,
    fields
}