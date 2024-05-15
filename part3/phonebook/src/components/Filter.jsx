const Filter = ({value, onChange}) => {
    return (
        <div>
            Filter by Name: 
            <input
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Filter