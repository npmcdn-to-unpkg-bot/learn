/**
 * Created by taozhiw on 2016/6/13.
 */
export const CHANGE_TEXT = 'CHANGE_TEXT';

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        text: text ? text : ''
    }
}

