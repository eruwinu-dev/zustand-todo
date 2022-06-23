import React from "react"
import { Text, VStack } from "@chakra-ui/react"

import TodoListItem from "./TodoListItem"
import useTodoStore from "../../lib/todoStore"

const TodoList = () => {
	const { todos } = useTodoStore()
	return (
		<VStack spacing={1} width="full" overflowY="auto" maxHeight="50vh">
			{todos.length ? (
				todos.map((todo, index) => <TodoListItem todo={todo} key={index} />)
			) : (
				<Text>No todos.</Text>
			)}
		</VStack>
	)
}

export default TodoList

