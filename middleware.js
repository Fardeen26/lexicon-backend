export const validateBook = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (err) {
        res.status(400).json({ msg: err.errors[0].message })
    }
}