import { useState } from 'react';

function useIsFetching() {
    const [fetching, setFetching] = useState(false);

    const toggleFetching = () => {
        setFetching(prevState => !prevState);
    }

    return [fetching, toggleFetching];

}

export default useIsFetching
