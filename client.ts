import { Client } from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import { config } from "https://deno.land/std@0.141.0/dotenv/mod.ts";

const { hostname, username, password, db } = await config();

const client = await new Client().connect({ hostname, username, db, password });

export default client;
