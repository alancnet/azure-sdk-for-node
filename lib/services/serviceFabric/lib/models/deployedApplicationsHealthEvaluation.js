/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the DeployedApplicationsHealthEvaluation class.
 * @constructor
 * The evaluation of the deployed applications health
 *
 * @member {array} [unhealthyEvaluations]
 *
 * @member {number} [totalCount]
 *
 * @member {number} [maxPercentUnhealthyDeployedApplications]
 *
 */
class DeployedApplicationsHealthEvaluation extends models['HealthEvaluation'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeployedApplicationsHealthEvaluation
   *
   * @returns {object} metadata of DeployedApplicationsHealthEvaluation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeployedApplications',
      type: {
        name: 'Composite',
        className: 'DeployedApplicationsHealthEvaluation',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            type: {
              name: 'String'
            }
          },
          unhealthyEvaluations: {
            required: false,
            serializedName: 'UnhealthyEvaluations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UnhealthyEvaluationElementType',
                  type: {
                    name: 'Composite',
                    className: 'UnhealthyEvaluation'
                  }
              }
            }
          },
          totalCount: {
            required: false,
            serializedName: 'TotalCount',
            type: {
              name: 'Number'
            }
          },
          maxPercentUnhealthyDeployedApplications: {
            required: false,
            serializedName: 'MaxPercentUnhealthyDeployedApplications',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DeployedApplicationsHealthEvaluation;
