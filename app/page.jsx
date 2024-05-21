"use client"

import { api } from "@convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import Items from "./_components/Items";

export default function Home() {

  const [text, setText] = useState("")
  const addTodo = useMutation(api.todos.createTodo)
  const todos = useQuery(api.todos.getTodo)
  const deleteTodo = useMutation(api.todos.deleteTodo)

  const handleClick = (text) => {
    addTodo({text: text})
    setText("")
  }

  const handleDelete = (id) => {
    deleteTodo({id: id})
  }
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <h1>To-do List</h1>
          <div className="flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-gray-200 px-1 py-1 rounded-md" type="text" />
            <button onClick={() => handleClick(text)} className="bg-blue-200 rounded-md px-1">Add</button>
          </div>
          <div>
            {todos?.map((todo) => (
              <Items key={todo.id} text={todo.text}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
