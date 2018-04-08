import {Map, List, Set} from 'immutable';

let disableSurveyQuestionAnswersMinimum= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersEnableMinimum"
                ],

                (option) => {return false}
        )
    );

    return newState;
}

export {
   disableSurveyQuestionAnswersMinimum,
}
