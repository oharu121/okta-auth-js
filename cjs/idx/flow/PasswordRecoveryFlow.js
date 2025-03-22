"use strict";

exports.PasswordRecoveryFlow = void 0;
var _remediators = require("../remediators");
/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */

const PasswordRecoveryFlow = {
  'identify': _remediators.Identify,
  'identify-recovery': _remediators.Identify,
  'select-authenticator-authenticate': _remediators.SelectAuthenticatorAuthenticate,
  'select-authenticator-enroll': _remediators.SelectAuthenticatorEnroll,
  'challenge-authenticator': _remediators.ChallengeAuthenticator,
  'authenticator-verification-data': _remediators.AuthenticatorVerificationData,
  'authenticator-enrollment-data': _remediators.AuthenticatorEnrollmentData,
  'reset-authenticator': _remediators.ResetAuthenticator,
  'reenroll-authenticator': _remediators.ReEnrollAuthenticator,
  'reenroll-authenticator-warning': _remediators.ReEnrollAuthenticatorWarning,
  'enroll-poll': _remediators.EnrollPoll
};
exports.PasswordRecoveryFlow = PasswordRecoveryFlow;
//# sourceMappingURL=PasswordRecoveryFlow.js.map