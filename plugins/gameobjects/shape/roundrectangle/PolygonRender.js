/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var renderWebGL = require('../../../utils/object/NOOP');
var renderCanvas = require('../../../utils/object/NOOP');

if (typeof WEBGL_RENDERER)
{
    renderWebGL = require('./PolygonWebGLRenderer');
}

if (typeof CANVAS_RENDERER)
{
    renderCanvas = require('./PolygonCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
