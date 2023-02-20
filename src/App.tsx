import { createRef, SyntheticEvent, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const [todos, setTodos] = useState<Array<{ id: number; todo: string; status?: boolean }>>([
		{ id: 12, todo: "Buy bread", status: false },
		{ id: 32, todo: "Buy Watermelon", status: false },
		{ id: 42, todo: "Buy Banana", status: false },
	]);
	const [inputValue, setInputValue] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState("");

	const ulRef = useRef<HTMLUListElement>(null);

	const addTodo = (): void => {
		if (inputValue) {
			setTodos([...todos, { id: Math.round(Math.random() * 10), todo: inputValue.trim(), status: false }]);
		}
		setInputValue("");
	};

	const onChangeHandler = (e: any): void => {
		let { value } = e.target;

		setInputValue(String(value));
	};

	const todoComplited = (e: any): void => {
		const id = e.target.parentElement.parentElement.dataset.id;

		setTodos(
			todos.map(item => {
				if (item.id === Number(id)) {
					return { ...item, status: !item.status };
				}

				return item;
			}),
		);
	};

	const saveEditedTodo = (): void => {
		setIsEditing(prev => !prev);
		setInputValue("");
		setTodos(
			todos.map(item => {
				const id = Number(editId);

				if (item.id === id) {
					return { ...item, todo: inputValue };
				}

				return item;
			}),
		);
	};

	const editTodo = (e: any): void => {
		setIsEditing(prev => !prev);
		const id = e.target.parentElement.dataset.id;
		setEditId(id);
		let itemTodo = todos.find(item => item.id === +id);
		itemTodo && setInputValue(itemTodo.todo);
	};

	const removeTodo = (e: any): void => {
		const id = e.target.parentElement.dataset.id;
		setTodos(todos.filter(item => item.id !== +id));
	};

	return (
		<div className="App">
			<div className="container">
				<div className="todo-input-wrap">
					<input className="todo-input" type="text" onChange={onChangeHandler} value={inputValue} />
					{isEditing ? (
						<button className="save-edited-todo btn" onClick={saveEditedTodo}>
							Сохранить
						</button>
					) : (
						<button className="todo-add btn" onClick={addTodo}>
							Добавить
						</button>
					)}
				</div>

				<div className="list-wrap">
					<ul className="list" ref={ulRef}>
						{todos.map((item: any) => {
							return (
								<li className="list__item" key={item.id} id={item.id}>
									<div>
										<p className={["list__item-text", item.status ? "complited" : ""].join(" ")}>
											{item.todo}
										</p>
									</div>
									<div
										className={["list__control", isEditing ? "disabled" : ""].join(" ")}
										data-id={item.id}
									>
										<span className="material-symbols-outlined" onClick={editTodo}>
											border_color
										</span>
										<span className="material-symbols-outlined" onClick={removeTodo}>
											delete
										</span>
										<label className="form-control">
											<input type="checkbox" onChange={todoComplited} />
										</label>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
