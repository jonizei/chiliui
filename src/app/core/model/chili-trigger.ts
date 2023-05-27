
export interface ChiliTrigger {
    id: number;
    type: string;
}

export interface ChiliTimeTrigger extends ChiliTrigger {
    weekday: string;
    time: string;
    duration: number;
}

export interface ChiliConditionTrigger extends ChiliTrigger {
    target: string;
    operation: string;
    value: number;
}