export declare class List {
    private _deepstream;
    private _record;
    constructor(deepstream: any);
    isEmpty(): void;
    getEntries(): void;
    setEntries(entries: Array<any>): void;
    addEntry(entry: string, index?: number): void;
    discard(): void;
    delete(): void;
}
