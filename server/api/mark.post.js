export default defineEventHandler(async event => {
    const db = useDatabase();
    
    const {id, state} = await readBody(event);
    const done = state ? 1 : 0;

    db.sql`UPDATE todos SET done = ${done} WHERE id = ${id.toString()}`;

    setResponseStatus(event, 200, "OK");
    return "OK";
})

