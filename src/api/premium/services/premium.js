'use strict';

/**
 * premium service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::premium.premium');
