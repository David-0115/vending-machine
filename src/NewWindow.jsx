import { useEffect, useRef } from "react";
import { createRoot } from 'react-dom/client';

const NewWindow = ({ title, children }) => {
    const newWindow = useRef(null);

    useEffect(() => {
        newWindow.current = window.open('', '_blank', 'width=600,height=400,left=200,top=200');
        if (!newWindow.current) {
            console.error("Failed to open new window. It might be blocked by a popup blocker.");
            return;
        }
        newWindow.current.document.title = title;

        const container = newWindow.current.document.createElement('div');
        newWindow.current.document.body.appendChild(container);

        const root = createRoot(container);
        root.render(children);

        return () => {
            // Deferring the unmount and close operations
            setTimeout(() => {
                if (root) {
                    root.unmount();
                }
                if (newWindow.current) {
                    newWindow.current.close();
                }
            }, 0); // Timeout delay set to 0 ms, essentially deferring until the stack clears
        };
    }, [title, children]);

    return null;
};

export default NewWindow;
