import React from "react";
import './Edit.css';

const Tags = (props) => {
    
        const removeTags = indexToRemove => {
            props.setTags([...props.tags.filter((_, index) => index !== indexToRemove)]);
        }

        const addTags = event => {
            if (event.target.value !== "") {
                props.setTags([...props.tags, event.target.value]);
                // props.selectedTags([...tags, event.target.value]);
                event.target.value = "";
            }
        };
        return (
        <div className="tags-input"
        style = {typeof props.disable === 'undefined' ? {} : props.disable ? {display:"none"} : {}}
        >
                <ul id="tags">
                    {props.tags.map((tag, index) => (
                        <li key={index} className="tag-edit">
                            <span className='tag-title'>{tag}</span>
                            <span className='tag-close-icon'
                                onClick={() => removeTags(index)}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>
                <input
                    className="tags-placeholder"
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="Enter your Teck Stack, Press enter to add tags"
                    // style={{pointerEvents: "none",opacity: "0.3"}}
                    disabled={typeof props.disable === 'undefined' ? false : props.disable}
                />
        </div>
        );

    
}

export default Tags;