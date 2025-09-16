const jwt = require("jsonwebtoken");

const tokenValidation = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ error: "Acesso negado "});
    }

    try {
        const verified = jwt.verify(token.split(" ")[1], "secreta");
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: "Token inválido" });
    }
};

module.exports = {
    tokenValidation,
};
