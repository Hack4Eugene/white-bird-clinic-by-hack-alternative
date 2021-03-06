import {Map, List, Set} from 'immutable';

let enableSurveyQuestionAnswersFilterBlacklistMode= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersFilterEnableBlacklistMode"
                ],

                (option) => {return true}
        )
    );

    return newState;
}

export {
   enableSurveyQuestionAnswersFilterBlacklistMode,
}
