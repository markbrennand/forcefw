import { ApexTestResultData, ApexTestResultOutcome } from '@salesforce/apex-node/lib/src/tests/types.js';
export declare const enum FileType {
    CSV = "csv",
    JSON = "json"
}
export interface OutputFile {
    type: FileType;
    name: string;
}
export interface TestFailure {
    outcome: ApexTestResultOutcome;
    message: string;
    className: string;
    methodName: string;
    stackTrace: string;
}
export declare function getFailures(tests: ApexTestResultData[]): ApexTestResultData[];
export declare function toTestFailure(test: ApexTestResultData): TestFailure;
export declare function getFile(fileName: string): OutputFile | undefined;
export declare function saveResults(outputFile: OutputFile, failures: TestFailure[]): void;
export declare function caselessCompareTestFailure(a: TestFailure, b: TestFailure): number;
export declare function caselessCompareString(a: string, b: string): number;
