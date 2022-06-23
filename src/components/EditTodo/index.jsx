import React, { useState } from "react"
import { Button, HStack, Input } from "@chakra-ui/react"
import useTodoStore from "../../lib/todoStore"

const EditTodo = () => {
	const { selectedTodo, selectTodo, editTodo, loading } = useTodoStore()
	const [text, setText] = useState(selectedTodo?.name || "")

	const textHandler = (event) => {
		event.preventDefault()
		setText(event.target.value)
	}

	const cancelTodoHandler = () => {
		selectTodo(false)
	}

	const editTodoHandler = async () => {
		if (!text || text === selectedTodo?.text) return
		await editTodo(text)
	}

	return (
		<HStack spacing={2} width="full" px="2.5%">
			<Input placeholder="Todo" value={text} onChange={textHandler} />
			<HStack spacing={1}>
				<Button size="sm" colorScheme="blue" onClick={editTodoHandler} isLoading={loading.editTodo}>
					Save
				</Button>
				<Button size="sm" colorScheme="gray" onClick={cancelTodoHandler}>
					Cancel
				</Button>
			</HStack>
		</HStack>
	)
}

export default EditTodo

