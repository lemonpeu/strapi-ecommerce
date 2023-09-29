'use strict';

/**
 * charm router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::charm.charm');
