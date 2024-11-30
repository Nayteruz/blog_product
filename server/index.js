const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require('json-server');
const path = require('path');

const PORT = process.env.PORT || 8000;
const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  // eslint-disable-next-line no-shadow
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromBd = users.find(user => user.username === username && user.password === password);

    if (!userFromBd) {
      return res.status(403).json({ message: 'User not found' });
    }

    return res.json(userFromBd);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.Authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server is running on 8000 port');
});
