// middlewares/validateUser.js

module.exports = (req, res, next) => {
    const { first_name, last_name, email, gender, address, card, married_status } = req.body;

    if (!first_name || !last_name || !email || !gender || !address || !card || married_status === undefined) {
        return res.status(400).json({ error: 'Faltan campos obligatorios en el cuerpo de la solicitud' });
    }

    if (typeof married_status !== 'boolean') {
        return res.status(400).json({ error: 'Tipo de dato inválido para married_status, se esperaba un booleano' });
    }

    if (!address.city || !address.state || !address.country || !address.country_code) {
        return res.status(400).json({ error: 'Faltan campos obligatorios en address' });
    }

    if (!card.card_number || !card.card_type || !card.currency_code || !card.balance) {
        return res.status(400).json({ error: 'Faltan campos obligatorios en card' });
    }

    next();
};
