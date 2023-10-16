import {styled} from "styled-components"

const Input = styled.input`
    padding: 5px 8px;
    font-size: 1rem;
    
    margin-left: 10px;
`
const TodoAddInput = ({setNewTodo, newTodo}) => {
    return <Input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
} 

export default TodoAddInput