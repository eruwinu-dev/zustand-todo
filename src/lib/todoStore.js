import create from "zustand"

const setAddTodo = (set) => async (todo) => {
	const asyncAddTodoHandler = async () => {
		setTimeout(() => {
			set((state) => {
				const newTodo = { id: state.todos.length + 1, name: todo, completed: false }
				const newTodos = [...state.todos, newTodo]
				localStorage.setItem("todos", JSON.stringify(newTodos))
				return { ...state, todos: newTodos, loading: { ...state.loading, addTodo: false } }
			})
		}, 500)
	}
	set((state) => ({ ...state, loading: { ...state.loading, addTodo: true } }))
	await asyncAddTodoHandler()
}

const setToggleTodo = (set) => (id) => {
	set((state) => {
		const newTodos = state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		localStorage.setItem("todos", JSON.stringify(newTodos))
		return {
			...state,
			todos: newTodos,
		}
	})
}

const setDeleteTodo = (set) => async (id) => {
	const asyncDeleteTodoHandler = async () => {
		setTimeout(() => {
			set((state) => {
				const newTodos = state.todos.filter((todo) => todo.id !== id)
				localStorage.setItem("todos", JSON.stringify(newTodos))
				return {
					...state,
					todos: newTodos,
					selectedTodo: null,
					loading: { ...state.loading, deleteTodo: false },
				}
			})
		}, 500)
	}
	set((state) => ({
		...state,
		selectedTodo: state.todos.find((todo) => todo.id === id),
		loading: { ...state.loading, deleteTodo: true },
	}))
	await asyncDeleteTodoHandler()
}

const setSelectTodo = (set) => async (id) => {
	set((state) => ({ ...state, selectedTodo: id ? state.todos.find((todo) => todo.id === id) : null }))
}

const setEditTodo = (set) => async (text) => {
	const asyncEditTodoHandler = async () => {
		setTimeout(() => {
			set((state) => {
				const newTodos = state.todos.map((todo) =>
					todo.id === state.selectedTodo.id ? { ...todo, name: text } : todo
				)
				localStorage.setItem("todos", JSON.stringify(newTodos))
				return {
					...state,
					todos: newTodos,
					selectedTodo: null,
					loading: { ...state.loading, editTodo: false },
				}
			})
		}, 500)
	}
	set((state) => ({
		...state,
		loading: { ...state.loading, editTodo: true },
	}))
	await asyncEditTodoHandler()
}

const useTodoStore = create((set) => ({
	todos: JSON.parse(localStorage.getItem("todos")) || [],
	selectedTodo: "hello",
	loading: {
		addTodo: false,
		deleteTodo: false,
		editTodo: false,
	},
	addTodo: setAddTodo(set),
	toggleTodo: setToggleTodo(set),
	deleteTodo: setDeleteTodo(set),
	selectTodo: setSelectTodo(set),
	editTodo: setEditTodo(set),
}))

export default useTodoStore

