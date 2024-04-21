// connection to postgress database

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// importing this neon package to connect with postgress db in neon , whcih is db provider

// and passing the url string which is getting from neon

const connector = neon(process.env.DATABASE_URL!);

export const db = drizzle(connector);
