
import { ConvexError } from "convex/values";
import { mutation } from "./_generated/server";


export const store = mutation({
    args:{},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()
        console.log(identity)
        if(!identity){
            throw new ConvexError("Called userStore while Unauthenticated")
        }

        // const userId = ctx.db.insert("users",)
    }
})