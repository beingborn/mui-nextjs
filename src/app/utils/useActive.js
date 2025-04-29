import { useEffect, useState } from 'react';

function useActive(initialValue = null) {
    const [isActive, setIsActive] = useState(initialValue);
    const toggleActive = (index) => {
        setIsActive(prev => (prev === index) ? null : index)
    }

    // 상태 동기화
    useEffect(() => {
        if(initialValue !== null && initialValue !== undefined) {
            setIsActive(initialValue)
        }
    }, [initialValue])

    
    return {
        isActive,
        toggleActive,
    }
}

export default useActive;