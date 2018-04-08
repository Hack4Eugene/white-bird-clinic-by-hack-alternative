import {Map, List, Set, OrderedMap} from 'immutable';

export const REMOVE_SURVEY_QUESTION_ANSWER= "REMOVE_SURVEY_QUESTION_ANSWER";
let removeSurveyQuestionAnswer= (dispatch) => {
    return (type, title, answer) => {

        let payload = {
            type: type,
            title: title,
            answer: answer,
        };

        dispatch({
            type: REMOVE_SURVEY_QUESTION_ANSWER,
            payload: payload
        });

    }
};

export {
    removeSurveyQuestionAnswer,
}
