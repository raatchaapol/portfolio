export const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://ratchapol-web-q2h74je4ja-as.a.run.app',
    'ratchapol-web-q2h74je4ja-as.a.run.app',
    '127.0.0.1:3000',
    'localhost:3000',
  ],
  methods: 'GET,PUT,PATCH,POST,DELETE',
  credentials: true,
};
