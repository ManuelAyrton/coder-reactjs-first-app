export const btnConfig = (items, prod, removeItem, addItem) => {
    return {
        remove: {
            variant: "secondary",
            className: `btnRemoveItem ${items === 0 && "btn-dark btn-outline-danger"}`,
            disabled: items === 0,
            onClick: removeItem
        },
        add: {
            variant: "primary",
            className: `btnAddItem ${items === prod.stock && "btn-dark btn-outline-danger"}`,
            disabled: items === prod.stock,
            onClick: addItem
        }
    }
}