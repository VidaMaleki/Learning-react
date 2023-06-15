import React, {FormEvent, useRef} from 'react';
import {useForm} from 'react-hook-form';


const GroceryList = () => {
    const nameRef = useRef(null)
    const {register, handleSubmit} = useForm();
    const category = ["Groceries", "Utility", "Entertainment"]

    const onSubmit = (event) => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Description</label>
                    <input
                    ref={nameRef}
                    id="item"
                    type="text"
                    className="form-control"
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                    id="item"
                    type="text"
                    className="form-control"
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                    id="item"
                    type="text"
                    className="form-control"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default GroceryList
