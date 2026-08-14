import platservice from '../service/plat.service.js';

class platcontroller {
    static creationplat = async (req, res) => {
        try {
            res.status(201).json(await platservice.creationplat(req.body));
        } catch (error) {
            res.json(error)
        }
    }
    static getallplat = async (req, res) => {
        try {
            res.status(200).json(await platservice.getallplat());
        } catch (error) {
            res.json(error)
        }
    }
    static getplatbyId = async (req, res) => {
        try {
            res.status(200).json(await platservice.getplatbyId(req.params.id));
        } catch (error) {
            res.json(error)
        }
    }
    static updateplat = async (req, res) => {
        try {
            res.status(200).json(await platservice.updateplat(req.params.id, req.body));
        } catch (error) {
            res.json(error)
        }
    }
    static deleteplat = async (req, res) => {
        try {
            res.status(200).json(await platservice.deleteplat(req.params.id));
        } catch (error) {
            res.json(error)
        }
    }
}
export default platcontroller;