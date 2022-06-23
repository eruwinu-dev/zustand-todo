import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import TodoPage from "./pages/TodoPage"

const App = () => {
	document.title = "Todo List App using Zustand"

	return (
		<ChakraProvider>
			<TodoPage />
		</ChakraProvider>
	)
}

export default App

