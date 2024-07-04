import { Handlers } from "$fresh/server.ts";

const db = await Deno.openKv ()

export const handler: Handlers = {
   async POST (req) {
      const program = await req.json ()
      console.dir (program)
      const { ok, versionstamp } = await db.set ([ `program` ], program)
      if (!ok) return new Response (`Failed to save program`, { status: 500 })
      const bc = new BroadcastChannel (`program_channel`)
      bc.postMessage ({ program, versionstamp })
      setTimeout (() => bc.close (), 5)

      return Response.json (versionstamp)
   }

}