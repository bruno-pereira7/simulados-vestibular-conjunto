export default () => ({
  ENVIRONMENT: process.env.ENVIRONMENT || "DEV",
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: Number(process.env.PORT) || 3000,
});
