const jwt = require('jsonwebtoken');

const users = [
    {email: 'user@example.com', password: '123456', role:"admin"},
    {email: 'usuario2@gmail.com', password: '234324', role:"student"}
];

let refreshTokens = [];

const login = (req, res) => {
    const {email, password} = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({error: "Informações de usuário inválidas"});
    }

    const acess = jwt.sign({email: user.email, role: user.role}, 'secreta', {expiresIn: '1hr'});

    const refresh = jwt.sign({email: user.email }, 'refresh_secreta', {expiresIn: '30s'});

    refreshTokens.push(refresh);

    res.json({acess, refresh});
};

const refresh = (req, res) => {
    const {token} = req.body;
    if (!token) {
        return res.status(401).json({error: "Acesso negado"});
    }

    if (!refreshTokens.includes(token)) {
        return res.status(403).json({error: "Token inválido"});
    }

    refreshTokens = refreshTokens.filter((rt)=> rt !== token);

    try {
        const decoded = jwt.verify(token, 'refresh_secreta');

        const newRefreshToken = jwt.sign({email: decoded.email }, 'refresh_secreta', {expiresIn: '7d'});
        refreshTokens.push(newRefreshToken);

        const newAcessToken = jwt.sign({email: decoded.email}, 'secreta', {expiresIn: "15m"});

        res.json({acess: newAcessToken, refresh: newRefreshToken});
    } catch (error) {
        return res.status(403).json({error: "Token inválido"})
    }
};

module.exports = {login, refresh};