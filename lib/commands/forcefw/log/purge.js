/*
 * Copyright 2025, Salesforce, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages } from '@salesforce/core';
Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('@markbrennand/sf-plugin-forcefw', 'forcefw.log.purge');
export default class Purge extends SfCommand {
  static summary = messages.getMessage('summary');
  static description = messages.getMessage('description');
  static examples = messages.getMessages('examples');
  static flags = {
    'target-org': Flags.optionalOrg(),
    verbose: Flags.boolean({
      summary: messages.getMessage('flags.verbose.summary'),
      char: 'v',
      default: false,
    }),
    limit: Flags.integer({
      summary: messages.getMessage('flags.limit.summary'),
      char: 'l',
      default: undefined,
    }),
  };
  verbose = false;
  async run() {
    const { flags } = await this.parse(Purge);
    this.verbose = flags.verbose;
    const connection = flags['target-org'].getConnection('64.0');
    const limit = flags.limit ?? 100000;
    let deleted = 0;
    while (deleted < limit) {
      const queryLimit = limit - deleted < 200 ? limit - deleted : 200;
      const results = // eslint-disable-next-line no-await-in-loop
      (await connection.query('SELECT Id FROM ApexLog ORDER BY StartTime LIMIT ' + queryLimit)).records;
      if (results.length === 0) {
        if (this.verbose && deleted === 0) {
          this.log('-- no log records found');
        }
        break;
      }
      if (this.verbose) {
        this.log('-- found ' + results.length + ' log records to delete');
      }
      const ids = results.map((result) => result.Id);
      await connection.delete('ApexLog', ids); // eslint-disable-line no-await-in-loop
      deleted += ids.length;
    }
    if (this.verbose && deleted > 0) {
      this.log('-- ' + deleted + ' log record(s) deleted');
    }
  }
}
//# sourceMappingURL=purge.js.map
