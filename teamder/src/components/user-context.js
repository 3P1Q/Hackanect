import React from 'react';
const userDataContext = React.createContext({
    data: {},
    setData: () => {},
});
export default userDataContext;