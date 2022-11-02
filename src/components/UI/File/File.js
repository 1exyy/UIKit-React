import React, {useState} from 'react';
import './File.css';

const File = ({onChange, ...props}) => {
    const [filesList, setFilesList] = useState([]);
    const [drag, setDrag] = useState(false);

    const dragOverHandler = (event) => {
        event.preventDefault();
        setDrag(true);
    }

    const dragLeaveHandler = (event) => {
        event.preventDefault();
        setDrag(false);
    }

    const dropHandler = (event) => {
        event.preventDefault();
        for (let file of [...event.dataTransfer.files]) {
            if (filesList.find(f => f.name === file.name)) continue;
            filesList.push(file);
        }

        setFilesList([...filesList]);
        setDrag(false);
        if (onChange) {
            onChange(filesList);
        }
    }

    const changeHandler = (event) => {
        for (let file of [...event.target.files]) {
            if (filesList.find(f => f.name === file.name)) continue;
            filesList.push(file);
        }

        setFilesList([...filesList]);
        if (onChange) {
            onChange(filesList);
        }
    }

    const removeHandler = (event) => {
        event.preventDefault();
        let list = filesList.filter(f => f.name !== event.target.dataset.filekey)
        setFilesList(list);
    }

    return (
        <label className='File'>
            <div className={`drop ${filesList.length ? `active` : ''} ${drag ? 'drag' : ''}`}
                 onDragOver={dragOverHandler}
                 onDragStart={dragOverHandler}
                 onDragLeave={dragLeaveHandler}
                 onDrop={dropHandler}>
                {drag ? <i className="fa fa-plus"/> : <i className="fa fa-arrow-down"/>}
            </div>

            <ul className="files_list">
                {filesList.map((file, index) => {
                    return (
                        <li className="file_list__item" key={file.name + index}>
                            <i className='fa fa-file'/>
                            <span className="file_list__item_name">
                                {file.name}
                            </span>
                            <i className="fa fa-times" data-filekey={file.name} onClick={removeHandler}/>
                        </li>
                    )
                })}
            </ul>

            <input type="file" {...props} multiple onChange={changeHandler}/>
        </label>
    );
};

export default File;
