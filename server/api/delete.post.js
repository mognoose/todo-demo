export default defineEventHandler(async event => {
    const db = useDatabase();
    
    const {id} = await readBody(event);
    
    db.sql`DELETE FROM todos WHERE id = ${id.id.toString()}`;

    return "OK";
})

