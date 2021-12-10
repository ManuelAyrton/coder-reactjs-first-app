export const btnConfig = (itemQty, stock, removeItem, addItem) => {
    return {
        remove: {
            variant: "secondary",
            className: `btnRemoveItem ${itemQty === 0 && "btn-dark btn-outline-danger"}`,
            disabled: itemQty === 0,
            onClick: removeItem
        },
        add: {
            variant: "primary",
            className: `btnAddItem ${itemQty === stock && "btn-dark btn-outline-danger"}`,
            disabled: itemQty === stock,
            onClick: addItem
        }
    }
}