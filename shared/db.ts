const db = await Deno.openKv()

export async function get_program () {
   const { value, versionstamp } = await db.get ([ `program` ])
   return { ...value, versionstamp }
}