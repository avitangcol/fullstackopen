const Form = ({onSubmit, nameValue, nameOnChange, numberValue, numberOnChange}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                Name: 
                <input 
                    value={nameValue}
                    onChange={nameOnChange}
                />
                <br />
                Number: 
                <input
                    value={numberValue}
                    onChange={numberOnChange}
                />
                </div>
                <div>
                <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form