
export type Difficulaty = "easy" | "hard" | "normal";
export type SequenceType= "exercise" | "Strech" | "break";

export interface Workout {
    slug: string,
    name: string,
    duration: number,
    difficulty: Difficulaty,
    sequence: Array<SequenceItem>,
}
export interface SequenceItem {
    slug: string,
    name: string,
    type: SequenceType,
    duration: number,
    reps?: number,
}