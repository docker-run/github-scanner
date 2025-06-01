/**
 * Formats a given number.
 * 
 * @param number The actual number to format
 *
 * @returns {string}
 *
 */
export const formatNumber = (number: number) => {
  return `${Intl.NumberFormat('en-US').format(number)}`;
};
