// Array to store and visualize users
const userDB = [];

const fetchUsers = async (req, res) => {
  res.status(200).json(userDB);
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, location } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({
      error:
        "Missing one of the following required fields: firstName, lastName, or email",
    });
  }

  const user = {
    firstName,
    lastName,
    email,
    location: location || "N/A",
  };

  userDB.push(user);
  return res.status(201).json({ message: "User successfully created!" });
};

module.exports = { fetchUsers, createUser };