const borderProps = require('./border');

const partOne = [
  'display',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'grid',
  'grid-area',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-row-gap',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-column-gap',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'gap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
  'order',
  'float',
  'clear',
  'box-sizing',
  'width',
  'inline-size',
  'min-width',
  'min-inline-size',
  'max-width',
  'max-inline-size',
  'height',
  'block-size',
  'min-height',
  'min-block-size',
  'max-height',
  'max-block-size',
  'margin',
  'margin-top',
  'margin-block-start',
  'margin-right',
  'margin-inline-end',
  'margin-bottom',
  'margin-block-end',
  'margin-left',
  'margin-inline-start',
  'padding',
  'padding-top',
  'padding-block-start',
  'padding-right',
  'padding-inline-end',
  'padding-bottom',
  'padding-block-end',
  'padding-left',
  'padding-inline-start',
];

const partTwo = ['object-fit', 'object-position', 'overflow', 'overflow-x', 'overflow-y', 'overflow-block', 'overflow-inline', 'overflow-behaviour-block', 'overflow-behaviour-inline'];

module.exports = ({ border }) => [].concat(partOne, border ? borderProps : [], partTwo);