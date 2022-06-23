import React from "react"
import { Button, Checkbox, HStack, Text } from "@chakra-ui/react"
import useTodoStore from "../../../lib/todoStore"

import EditTodo from "../../EditTodo"

const TodoListItem = ({ todo }) => {
	const { toggleTodo, deleteTodo, loading, selectedTodo, selectTodo } = useTodoStore()

	const toggleTodoHandler = () => {
		toggleTodo(todo.id)
	}

	const deleteTodoHandler = () => {
		deleteTodo(todo.id)
	}

	const selectTodoHandler = () => {
		selectTodo(todo.id)
	}

	if (selectedTodo?.id === todo.id && !loading.deleteTodo) return <EditTodo />

	return (
		<HStack
			width="95%"
			spacing={2}
			display="flex"
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			_hover={{
				background: "gray.50",
			}}
			ml="2.5%"
			p="10px"
			borderRadius="5px"
		>
			<HStack>
				<Checkbox isChecked={todo.completed} onChange={toggleTodoHandler}></Checkbox>
				<Text as={todo.completed ? "s" : ""}>{todo.name}</Text>
			</HStack>
			<HStack spacing={1}>
				<Button colorScheme="cyan" size="sm" onClick={selectTodoHandler}>
					Edit
				</Button>
				<Button
					colorScheme="red"
					size="sm"
					onClick={deleteTodoHandler}
					isLoading={selectedTodo?.id === todo.id && loading.deleteTodo}
				>
					Delete
				</Button>
			</HStack>
		</HStack>
	)
}

export default TodoListItem

