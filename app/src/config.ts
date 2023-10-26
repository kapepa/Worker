const config = {
  api: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:5000' : 'https://worker-beige.vercel.app',
};

export default config;