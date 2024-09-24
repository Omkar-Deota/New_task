export default {
    app: {
      port: Number(process.env.PORT),
      url: process.env.APP_URL,
    },
    db: String(process.env.DB_URI),
    environment: process.env.NODE_ENV,
  };
  