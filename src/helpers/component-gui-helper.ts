/**
 * component-gui-helper module
 * 
 * Exposes functionalities for components gui rendering
 * 
 * @exports
 * 
 *  getAmountCssClass(amountId: string, amount: number): string
 * 
 */
/**
 * Return the css class for html elements representing amounts
 * @param amountId {String}
 *  The amount id (like 'balance', or 'amountPerDay')
 * @param amount {Number}
 *  The actual amount
 * @return {String}
 *  Samples
 *      'sb-amount sb-balance sb-green'
 *      'sb-amount sb-amountPerDay sb-red'
 */
export const getAmountCssClass = (amountId: string, amount: number): string => {
    let className: string = `sb-amount sb-${ amountId }`;
    if (amount > 0) {
        className += ' sb-green';
    } else {
        className += ' sb-red';
    }
    return className;
};