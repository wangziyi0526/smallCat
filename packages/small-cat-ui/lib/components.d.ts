import * as components from './index'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        ScButton: typeof components.Button
        ScIcon: typeof components.Icon
    }
}
export {}
