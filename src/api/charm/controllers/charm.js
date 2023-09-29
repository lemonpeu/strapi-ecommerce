'use strict';

/**
 * charm controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::charm.charm');
