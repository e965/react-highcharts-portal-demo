import { useRef, useState, useEffect } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';

type PropsType = {
    handleWindowClose: () => void;
};

const Portal: React.FC<PropsType> = ({ handleWindowClose, children }) => {
    const WindowRef = useRef<ReturnType<typeof window.open>>(null);

    const [IsWindowCreated, setIsWindowCreated] = useState<boolean>(false);

    useEffect(() => {
        WindowRef.current = window.open('', '', `location=1,status=1,scrollbars=1,resizable=0,height=450,width=600`);

        if (WindowRef.current) {
            setIsWindowCreated(true);

            WindowRef.current.onbeforeunload = () => {
                handleWindowClose();
                setIsWindowCreated(false);
            };
        }

        return () => {
            if (WindowRef.current) {
                unmountComponentAtNode(WindowRef.current.document.body);
                WindowRef.current.close();
            }
        };
    }, [handleWindowClose]);

    return IsWindowCreated && WindowRef.current !== null ? createPortal(children, WindowRef.current.document.body) : null;
};

export default Portal;
