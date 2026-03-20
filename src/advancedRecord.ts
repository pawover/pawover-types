export type AdvancedRecordMode = ["?" | "!", "W" | "R"];
export type AdvancedRecord<K extends PropertyKey, A = unknown, mode extends AdvancedRecordMode = ["!", "W"]> = {
  "!": { R: { readonly [P in K]: A }; W: { [P in K]: A } };
  "?": { R: { readonly [P in K]?: A }; W: { [P in K]?: A } };
}[mode[0]][mode[1]];
