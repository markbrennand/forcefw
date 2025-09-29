import { SfCommand } from '@salesforce/sf-plugins-core';
export default class Run extends SfCommand<void> {
    static readonly summary: string;
    static readonly description: string;
    static readonly examples: string[];
    static readonly flags: {
        'target-org': import("@oclif/core/interfaces").OptionFlag<import("@salesforce/core").Org, import("@oclif/core/interfaces").CustomOptions>;
        'output-file': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        verbose: import("@oclif/core/interfaces").BooleanFlag<boolean>;
    };
    private verbose;
    private static getOutputFile;
    run(): Promise<void>;
    private runTestsAsync;
    private runTestsSync;
}
