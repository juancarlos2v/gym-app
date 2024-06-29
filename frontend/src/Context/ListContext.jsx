/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [list, setList] = useState("M");

    return (
        <ListContext.Provider value={{ list, setList }} >
            {children}
        </ListContext.Provider>
    )
}
ListProvider.propTypes = {
    children: PropTypes.node.isRequired, // Asegúrate de incluir esta validación para 'children'
};

export const useListContext = () => useContext(ListContext);