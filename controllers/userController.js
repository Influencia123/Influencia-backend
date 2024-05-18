const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async loginCheck(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);
      res.json({ user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
