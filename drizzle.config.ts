import type { Config } from "drizzle-kit";

export default {
  driver: "pg", // db is using is postgress
  schema: "./src/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // /!  is used to determine the typescript yes it is defined under .env file
  },
  out: "/drizzel",
} satisfies Config;
