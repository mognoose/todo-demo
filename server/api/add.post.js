export default defineEventHandler(async event => {
    const db = useDatabase();
    await db.sql`CREATE TABLE IF NOT EXISTS todos ("id" TEXT PRIMARY KEY, "title" TEXT, "done" BOOLEAN)`;
    
    const {title} = await readBody(event);

    db.sql`INSERT INTO todos VALUES (${Date.now()}, ${title}, false)`;

    setResponseStatus(event, 200, "OK");
    return "OK";
})