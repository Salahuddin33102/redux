import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deletetodo, edittodo, setinputvalue, } from '../todoSlice';


function todo() {

    const dispatch = useDispatch()
    const { store, inputvalue } = useSelector((state) => state.todo)







    return (
        <div className=''>
            <div className='flex gap-2'>
                <input className='p-2 border outline-none w-full' type="text" name='todo' placeholder='type' value={inputvalue}
                    onChange={(e) => dispatch(setinputvalue(e.target.value))}
                />
                <button className='p-2 bg-red-500 text-white cursor-pointer'
                    onClick={() => dispatch(addTodo())}
                >Add</button>
            </div>
            <ul>
                {store.map((item, index) => (
                    <div className='flex justify-between gap-2 mt-2 w-full'>
                        <li className='bg-black text-white p-2 w-full '>{item}</li>
                        <button className='bg-red-600 p-2 text-white cursor-pointer'
                            onClick={() => dispatch(deletetodo(index))}
                        >Delete</button>
                        <button className='bg-red-600 p-2 text-white cursor-pointer'

                            onClick={() => dispatch(edittodo(index))}>Edit</button>
                    </div>
                ))

                }
            </ul>


        </div>
    )
}

export default todo