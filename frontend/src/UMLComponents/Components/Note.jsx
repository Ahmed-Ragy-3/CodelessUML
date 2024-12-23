import React, { useState, useRef } from 'react';

const Note = () => {
    const [size, setSize] = useState({ width: 200, height: 200, fontSize: 20 });
    const [text, setText] = useState('');
    const textareaRef = useRef(null);
    const initialSize = useRef(size);
    const isResizing = useRef(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleTextChange = (event) => {
        const { value } = event.target;
        setText(value);

        // Reset height to auto to calculate new height
        textareaRef.current.style.height = 'auto';

        // Calculate new height based on scrollHeight
        const newHeight = Math.max(size.height - size.fontSize, textareaRef.current.scrollHeight);

        // Update textarea height
        textareaRef.current.style.height = `${newHeight}px`;

        // Update size state to match the new textarea height
        setSize((prevSize) => ({
            ...prevSize,
            height: Math.max(newHeight + size.fontSize, 100), // Ensure the note height is updated
        }));
    };

    const handleWidth = (e) => {
        e.preventDefault();
        isResizing.current = true;
        initialSize.current = { x: e.clientX, width: size.width };

        document.addEventListener('mousemove', handleMouseMove1);
        document.addEventListener('mouseup', handleMouseUp1);
    };

    const handleMouseMove1 = (e) => {
        if (!isResizing.current) return;

        const deltaX = e.clientX - initialSize.current.x;
        setSize((prevSize) => ({
            width: Math.max(100, initialSize.current.width + deltaX),
            height: prevSize.height,
        }));
        
    };

    const handleMouseUp1 = () => {
        isResizing.current = false;
        document.removeEventListener('mousemove', handleMouseMove1);
        document.removeEventListener('mouseup', handleMouseUp1);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const initialPosition = { ...position };

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;

            setPosition({
                x: initialPosition.x + deltaX,
                y: initialPosition.y + deltaY,
            });
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const frames = Array.from({ length: 4 }, (_, index) => (
        <div
            onMouseDown={handleDrag}
            key={index}
            style={{
                position: 'absolute',
                border: '2px solid #B7B7B7',
                width: `2px`,
                height: `20px`,
                borderRadius: '25%',
                background: '#B7B7B7',
                top: '-13.5px',
                left: `${(index + 1) * (size.width / 5)}px`, // Adjust based on current width
                cursor: 'move',
                zIndex: 3,
            }}
        />
    ));

    return (
        <div
            style={{
                display: 'inline-block',
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: 'move',
            }}
        >
            {frames}
            <div
                style={{
                    position: 'absolute',
                    border: '1.5px solid #8C8C8C',
                    borderRadius: '8px',
                    width: `${size.width}px`,
                    height: `${size.height + 11.5}px`,
                    background: '#E6E6E6',
                    top: '0',
                    left: '0',
                    zIndex: 1,
                }}
            />
            <input
                type="text"
                style={{
                    fontSize: `${size.fontSize}px`,
                    color: 'black',
                    border: '2px solid transparent',
                    background: 'transparent',
                    outline: 'none',
                    width: `${size.width}px`,
                    height: `${size.fontSize + 20}px`,
                    boxSizing: 'border-box',
                    padding: '10px',
                    position: 'absolute',
                    top: '0',
                    left: '75px',
                    zIndex: 2,
                }}
                placeholder='title'
            />
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleTextChange}
                style={{
                    fontSize: `${size.fontSize}px`,
                    color: 'black',
                    border: '2px solid transparent',
                    background: 'transparent',
                    outline: 'none',
                    width: `${size.width}px`,
                    height: 'auto',
                    minHeight: `${size.height - size.fontSize}px`,
                    boxSizing: 'border-box',
                    padding: '10px',
                    position: 'absolute',
                    top: `${size.fontSize + 20}px`,
                    left: '0',
                    zIndex: 2,
                    textAlign: 'left',
                    resize: 'none',
                    overflow: 'hidden',
                }}
                placeholder='type here...'
            />
            <div
                onMouseDown={(e) => { e.stopPropagation(); handleWidth(e); }}
                style={{
                    position: 'absolute',
                    width: '7px',
                    height: '20px',
                    border: '0.5px solid #E6E6E6',
                    borderRadius: '40%',
                    backgroundColor: '#8C8C8C',
                    cursor: 'e-resize',
                    left: `${size.width - 3.5}px`,
                    top: `${size.height / 3}px`,
                    zIndex: 3,
                }}
            />
        </div>
    );
};

export default Note;
