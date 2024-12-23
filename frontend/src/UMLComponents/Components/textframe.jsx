import React, { useState, useRef, useEffect } from 'react';

function Textframe() {
    const [size, setSize] = useState({ width: 200, height: 50, fontSize: 20 });
    const [showHandles, setShowHandles] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeDirection, setResizeDirection] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const inputRef = useRef(null);
    const resizerRef = useRef(null);

    const handleMouseDown = (e, direction) => {
        e.preventDefault();
        setIsResizing(true);
        setResizeDirection(direction);
        const startX = e.clientX;
        const startY = e.clientY;
        const initialWidth = size.width;
        const initialHeight = size.height;

        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const deltaY = moveEvent.clientY - startY;

            if (direction === "top-left") {
                setSize((prevSize) => ({
                    width: Math.max(100, initialWidth - deltaX),
                    height: Math.max(30, initialHeight - deltaY),
                    fontSize: Math.max(10, Math.min(50, (initialWidth - deltaX) / 10)),
                }));
            } else if (direction === "down-right") {
                setSize((prevSize) => ({
                    width: Math.max(100, initialWidth + deltaX),
                    height: Math.max(30, initialHeight + deltaY),
                    fontSize: Math.max(10, Math.min(50, (initialWidth + deltaX) / 10)),
                }));
            } else if (direction === "right") {
                setSize((prevSize) => ({
                    width: Math.max(100, initialWidth + deltaX),
                    height: initialHeight, // Keep height constant
                    fontSize: Math.max(10, Math.min(50, (initialWidth + deltaX) / 10)),
                }));
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            setResizeDirection(null);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleFocus = () => {
        setShowHandles(true);
    };

    const handleBlur = () => {
        setShowHandles(false);
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

    // Effect to handle clicks outside of the input
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resizerRef.current && !resizerRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
                setShowHandles(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ display: 'inline-block', position: 'relative', left: position.x, top: position.y }}>
            <input
                ref={inputRef}
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{
                    fontSize: `${size.fontSize}px`,
                    color: 'black',
                    border: '2px solid transparent',
                    background: 'transparent',
                    outline: 'none',
                    width: `${size.width}px`,
                    height: `${size.height}px`,
                    boxSizing: 'border-box',
                    padding: '10px',
                }}
                placeholder="Type here..."
            />
            {showHandles && (
                <div
                    ref={resizerRef}
                    onMouseDown={handleDrag} // Enable dragging on the frame
                    style={{
                        position: 'absolute',
                        border: '2px solid #290633', // Border color
                        width: `${size.width}px`,
                        height: `${size.height}px`,
                        top: '0',
                        left: '0',
                        cursor: 'move',
                    }}
                >
                    <div
                        onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e, 'down-right'); }} // Bottom-right handle
                        style={{
                            position: 'absolute',
                            width: '10px',
                            height: '10px',
                            border: '0.5px solid #290633',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            cursor: 'se-resize',
                            bottom: '-5px',
                            right: '-5px',
                            boxShadow: isResizing && resizeDirection === 'down-right' ? '0 0 10px 2px rgba(128, 0, 128, 0.5)' : 'none',
                            transition: 'box-shadow 0.2s',
                        }}
                    />
                    <div
                        onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e, 'top-left'); }} // Top-left handle
                        style={{
                            position: 'absolute',
                            width: '10px',
                            height: '10px',
                            border: '0.5px solid #290633',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            cursor: 'nw-resize',
                            top: '-5px',
                            left: '-5px',
                            boxShadow: isResizing && resizeDirection === 'top-left' ? '0 0 10px 2px rgba(128, 0, 128, 0.5)' : 'none',
                            transition: 'box-shadow 0.2s',
                        }}
                    />
                    <div
                        onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e, 'right'); }} // Right handle
                        style={{
                            position: 'absolute',
                            width: '7px',
                            height: '20px',
                            border: '0.5px solid #290633',
                            borderRadius: '40%',
                            backgroundColor: 'white',
                            cursor: 'e-resize',
                            right: '-5px',
                            top: `${size.height / 3}px`,
                            boxShadow: isResizing && resizeDirection === 'right' ? '0 0 10px 2px rgba(128, 0, 128, 0.5)' : 'none',
                            transition: 'box-shadow 0.2s',
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Textframe;
