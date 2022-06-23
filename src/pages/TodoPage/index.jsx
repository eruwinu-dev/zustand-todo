import { Flex, Text, VStack } from "@chakra-ui/react"
import React from "react"
import AddTodo from "../../components/AddTodo"
import TodoList from "../../components/TodoList"

const TodoPage = () => {
	return (
		<Flex width="100vw" height="100vh" flexDirection="column" alignItems="center" justifyContent="center">
			<VStack spacing={4} width={["75%", "75%", "50%", "30%"]} boxShadow="lg" borderRadius="5">
				<Text fontSize="lg" fontWeight="bold">
					Todo App using Zustand
				</Text>
				<AddTodo />
				<TodoList />
			</VStack>
		</Flex>
	)
}

export default TodoPage

