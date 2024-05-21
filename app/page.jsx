"use client"

import { api } from "@convex/_generated/api";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { useState } from "react";
import Items from "./_components/Items";
import { SignInButton } from "@clerk/clerk-react";

export default function Home() {

  const {isAuthenticated} = useConvexAuth()

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
    // <div className="w-screen h-screen">
    //   <div className="w-full h-full flex justify-center items-center">
    //     <div className="flex flex-col gap-2">
    //       <h1>To-do List</h1>
    //       <div className="flex gap-2">
    //         <input value={text} onChange={(e) => setText(e.target.value)} className="bg-gray-200 px-1 py-1 rounded-md" type="text" />
    //         <button onClick={() => handleClick(text)} className="bg-blue-200 rounded-md px-1">Add</button>
    //       </div>
    //       <div>
    //         {todos?.map((todo) => (
    //           <Items key={todo._id} id={todo._id} text={todo.text} deleteButton={handleDelete}/>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {isAuthenticated ? "Hello World" : <SignInButton/>}
    </div>
  );
}
