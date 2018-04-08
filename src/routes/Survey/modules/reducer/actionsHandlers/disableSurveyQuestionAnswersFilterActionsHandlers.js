import {Map, List, Set} from 'immutable';

let disableSurveyQuestionAnswersFilter= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersEnableFilter"
                ],

                (option) => {return false}
        )
    );

    return newState;
}

export {
   disableSurveyQuestionAnswersFilter,
}
