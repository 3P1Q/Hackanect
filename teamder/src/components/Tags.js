import React, {useState} from "react";
import './Edit.css';

const Tags = () => {

    // return <h1>Hey</h1>
        const [tags, setTags] = useState([]);

        const removeTags = indexToRemove => {
            setTags([...tags.filter((_, index) => index !== indexToRemove)]);
        }

        const addTags = event => {
            if (event.target.value !== "") {
                setTags([...tags, event.target.value]);
                // props.selectedTags([...tags, event.target.value]);
                event.target.value = "";
            }
        };
        return (
        <div className="tags-input">
                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className='tag-title'>{tag}</span>
                            <span className='tag-close-icon'
                                onClick={() => removeTags(index)}
                            >
                                x
                            </span>
                        </li>
                    ))}
                </ul>
                <input
                    className="tags-placeholder"
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="Press enter to add tags"
                />
            </div>
        );

    
}

export default Tags;