import { Client } from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import "https://deno.land/std@0.142.0/dotenv/load.ts";

const { hostname, username, password, db } = Deno.env.toObject();

const client = await new Client().connect({ hostname, username, db, password });

export default client;
