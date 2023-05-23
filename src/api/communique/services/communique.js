'use strict';

/**
 * communique service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::communique.communique');
