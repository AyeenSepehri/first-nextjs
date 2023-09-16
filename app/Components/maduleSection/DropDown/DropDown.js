import React from 'react'

const DropDown = (props) => {
    const items = props.items
    return (
        <div>
            <select className="select select-bordered w-95 max-w-xs m-2">
                {items.map(item => <option selected>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown