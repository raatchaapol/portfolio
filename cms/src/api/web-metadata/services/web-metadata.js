'use strict';

/**
 * web-metadata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-metadata.web-metadata');
