import {select} from './utils';

const canvas = select('#renderCanvas');
const ctx = canvas.getContext("2d");

export {canvas, ctx};