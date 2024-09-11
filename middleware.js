export const validateBook = (schema) => async (req, res, next) => {
    try {
        console.log(schema)
        const parsedBody = await schema.parseAsync(req.body);
        console.log(parsedBody)
        req.body = parsedBody;
        next();
    } catch (err) {
        console.log("ha bhai ye ha jad")
        res.status(400).json({ msg: err.errors[0].message })
    }
}