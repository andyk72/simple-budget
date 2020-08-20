import * as types from './actionsTypes';

export function guiLoadStart() {
    return {
        type: types.GUI_LOAD_START
    };
}

export function guiLoadEnd() {
    return {
        type: types.GUI_LOAD_END
    };
}