/*
 *
 *  Return a given string cleared from any numbers.
 *
 */
const stringClean = string => typeof string != 'string' ? 'Inavlid string passed.' : string.replace(/\d/g, '');