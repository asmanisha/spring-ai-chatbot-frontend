import React, { useRef, useEffect } from "react";

const AutoResizeTextarea = ({ value, onChange, placeholder, readOnly = false }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            className="auto-textarea"
        />
    );
};

export default AutoResizeTextarea;
