/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VpnClientParameters class.
 * @constructor
 * Vpn Client Parameters for package generation
 *
 * @member {string} processorArchitecture VPN client Processor Architecture.
 * Possible values are: 'AMD64' and 'X86'. Possible values include: 'Amd64',
 * 'X86'
 *
 */
class VpnClientParameters {
  constructor() {
  }

  /**
   * Defines the metadata of VpnClientParameters
   *
   * @returns {object} metadata of VpnClientParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VpnClientParameters',
      type: {
        name: 'Composite',
        className: 'VpnClientParameters',
        modelProperties: {
          processorArchitecture: {
            required: true,
            serializedName: 'processorArchitecture',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VpnClientParameters;
