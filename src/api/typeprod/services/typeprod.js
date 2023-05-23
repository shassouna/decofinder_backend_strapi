'use strict';

/**
 * typeprod service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::typeprod.typeprod');
