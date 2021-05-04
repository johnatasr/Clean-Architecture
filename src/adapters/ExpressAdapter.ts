export default class ExpressAdapter {
	static create (fn: any): any {
		return async function (req, res) {
			const obj = await fn(req.params, req.body);
			res.json(obj);
		}
	}
}