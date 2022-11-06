import React, {useState} from 'react';
import './File.css';

const contentTypes = {
    'jpg': 'fa-file-image-o',
    'doc': 'fa-file-word-o',
    'txt': 'fa-file-text-o',
    'png': 'fa-file-image-o',
    'mp4': 'fa-file-video-o',
    'avi': 'fa-file-video-o',
    'mp3': 'fa-file-audio-o',
    'ogg': 'fa-file-audio-o',
    'wav': 'fa-file-audio-o',
    'gif': 'fa-file-video-o',
    'rar': 'fa-file-archive-o',
    'zip': 'fa-file-archive-o',
    'ico': 'fa-file-archive-o',
    'raw': 'fa-file-image-o',
    'pdf': 'fa-file-pdf-o',
    'html': 'fa-file-code-o',
    'css': 'fa-file-code-o',
    'js': 'fa-file-code-o',
    'pptx': 'fa-file-powerpoint-o',
    'xls': 'fa-file-excel-o',
}

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

    function getFileFormat(name) {
        const split = name.split('.');
        if (split.length === 1) return 'fa-folder-o';
        return contentTypes[split[split.length - 1]] || 'fa-file-o';
    }

    return (
        <label
            className='File'
            onDragOver={dragOverHandler}
            onDragStart={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDrop={dropHandler}>
            <div
                className={`drop ${drag ? 'drag' : ''}`}>
                {!drag ? <i className='fa fa-arrow-down'/> : <i className="fa fa-plus"/>}

            </div>
            {!filesList.length ? '' :
                <ul className='files_list'>
                    {filesList.map((file, index) => {
                        return (
                            <li className="file_list__item" key={file.name + index}>
                                <i className={`fa ${getFileFormat(file.name)}`}/>
                                <span className="file_list__item_name">
                                {file.name}
                            </span>
                                <i className="fa fa-times" data-filekey={file.name} onClick={removeHandler}/>
                            </li>
                        )
                    })}
                </ul>
            }

            <input type="file" {...props} multiple onChange={changeHandler}/>
        </label>
    );
};

export default File;
