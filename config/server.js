module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8082),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "81330c6d4dfb6b1eb3e5dfecf999bf2a"),
    },
  },
});
