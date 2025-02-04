export default defineEventHandler(async event => {
    const db = useDatabase();

    const todos = await db.sql`SELECT * FROM todos`;

    return todos;
})