'use strict';

/**
 * ambiance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ambiance.ambiance');
