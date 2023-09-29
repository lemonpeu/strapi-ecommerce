'use strict';

/**
 * charm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::charm.charm');
