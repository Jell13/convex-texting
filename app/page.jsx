"use client"

import { api } from "@convex/_generated/api";
import { createTodo } from "@convex/todos";
import { useMutation } from "convex/react";
import { useState } from "react";

export default function Home() {

  const [text, setText] = useState("")
  const addTodo = useMutation(api.todos.createTodo)

  const handleClick = (text) => {
    addTodo({text: text})
    setText("")
  }
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col">
          <h1>To-do List</h1>
          <div className="flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-gray-200 px-1 py-1 rounded-md" type="text" />
            <button onClick={() => handleClick(text)} className="bg-blue-200 rounded-md px-1">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
