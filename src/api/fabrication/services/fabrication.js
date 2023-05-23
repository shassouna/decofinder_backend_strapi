'use strict';

/**
 * fabrication service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fabrication.fabrication');
