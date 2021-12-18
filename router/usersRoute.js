const express = require('express');

const router = express.Router();

let users = [{ id: 1, username: 'Saleh', role: 'Admin' }];

router.get('/', (req, res) => {
  res.json(users);
});
router.post('/', (req, res) => {
  const { id, username, role } = req.body;

  if (!id || !username || !role) {
    return res.status(400).json({ message: 'Please send all the required fileds !' });
  }

  users.push(req.body);
  res.status(201).json({ message: 'User added successfully !' });
});
router.put('/:userid', (req, res) => {
  const { id, username, role } = req.body;

  if (!id || !username || !role) {
    return res.status(400).json({ message: 'Please send all the required fileds !' });
  }

  const { userid } = req.params;
  const index = users.findIndex((obj) => obj.id == userid);

  if (index == -1) {
    return res.status(400).json({ message: 'Please send valid user id' });
  }
  users[index] = req.body;

  res.json({ message: 'User updated successfully !' });
});
router.delete('/:userid', (req, res) => {
  const { userid } = req.params;

  const index = users.findIndex((obj) => obj.id == userid);

  if (index == -1) {
    return res.status(400).json({ message: 'Please send valid user id' });
  }
  users = users.filter((obj) => obj.id != userid);

  res.json({ message: 'User deleted successfully !' });
});

// exports data
// exports.data = () => {
//   console.log('Data');
// };

// exports default router
module.exports = router;
