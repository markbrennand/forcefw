import { SfCommand } from '@salesforce/sf-plugins-core';
export default class Purge extends SfCommand<void> {
  static readonly summary: string;
  static readonly description: string;
  static readonly examples: string[];
  static readonly flags: {
    'target-org': import('@oclif/core/interfaces').OptionFlag<
      import('@salesforce/core').Org,
      import('@oclif/core/interfaces').CustomOptions
    >;
    verbose: import('@oclif/core/interfaces').BooleanFlag<boolean>;
    limit: import('@oclif/core/interfaces').OptionFlag<number, import('@oclif/core/interfaces').CustomOptions>;
  };
  private verbose;
  run(): Promise<void>;
}
