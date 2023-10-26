const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
  }
  res.send('Register Route');
};

const loginUser = (req, res) => {
  res.send('Login Route');
};

export { registerUser, loginUser };
