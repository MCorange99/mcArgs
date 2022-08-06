interface Parsed {
    name: string,
    triger: string,
    type: "TYPE_DOUBLE" | "TYPE_SINGLE",
    value: string | boolean
}

declare class mcArgs {
    public constructor(argv: string[]);
    public add_single(name: string, trigger: string): void
    public add_double(name: string, trigger: string): void
    public parse(): {
        name: Parsed
    }
}