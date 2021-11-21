import InitialWeek from '../models/tasks';

async function getTasks(req, res) {
    try {
        const initialWeek = await InitialWeek.find();
        res.json(initialWeek);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

// async function postWeek(req, res) {
//     try {
//         const week = new InitialWeek(req.body);
//         const result = await week.save();
//         res.status(200).json(result);
//     } catch (error) {
//         res.json(error);
//     }
// }

export { getTasks };
