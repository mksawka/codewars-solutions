/*
 *
 *  Remove whitespaces from a given string.
 *
 */
const noSpace = string => typeof string === 'string' ? string.replace(/\s/g, '') : 'Invalid input.';