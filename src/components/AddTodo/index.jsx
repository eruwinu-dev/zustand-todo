import React, { useState } from "react"
import { Button, HStack, Input } from "@chakra-ui/react"
import useTodoStore from "../../lib/todoStore"

const AddTodo = () => {
	const { addTodo, loading } = useTodoStore()
	const [text, setText] = useState("")

	const textHandler = (event) => {
		event.preventDefault()
		setText(event.target.value)
	}

	const addTodoHandler = async () => {
		if (!text) return
		await addTodo(text)
		setText("")
	}

	return (
		<HStack
			spacing={2}
			width="full"
			display="flex"
			flexDirection="row"
			alignItems="center"
			justifyContent="center"
			px="2.5%"
		>
			<Input placeholder="Add Todo" value={text} onChange={textHandler} />
			<Button onClick={addTodoHandler} colorScheme="green" isLoading={loading.addTodo}>
				Add
			</Button>
		</HStack>
	)
}

export default AddTodo

