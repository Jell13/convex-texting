import {mutation, query} from './_generated/server'
import { v } from 'convex/values' 

export const createTodo = mutation({
    args:{text: v.string()},
    handler: async (ctx, args) => {
        await ctx.db.insert("todos", {text: args.text})
    }
})

export const getTodo = query({
    handler: async (ctx) => {
        return await ctx.db.query("todos").collect()
    }
})

export const deleteTodo = mutation({
    args:{id: v.id("todos")},
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    }
})