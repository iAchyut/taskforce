import * as React from 'react';

export const GlobalContext = React.createContext({});

const GlobalProvider = ({children, ...others}) => {

    return (
        <GlobalContext.Provider value={others}>
            {children}
        </GlobalContext.Provider>
    )

}


export default GlobalProvider;