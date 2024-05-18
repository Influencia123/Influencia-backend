const User = require("../models/user");
const bcrypt = require("bcryptjs");

class UserService {
  async createUser(userData) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = new User({
        username: userData.username,
        email: userData.email,
        role: userData.role,
        password: hashedPassword,
      });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  async login(email, password) {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Incorrect password");
      }
      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        loginCheck: true,
      };
    } catch (error) {
      throw new Error("Login failed");
    }
  }
}

module.exports = new UserService();
