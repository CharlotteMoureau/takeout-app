export const getAllQty = (data: Array<any>) => {
    let total = 0

    data.forEach(product => {
        total += product.qty
    })

    return total
}