import {Map, List, Set} from 'immutable';

let enableSurveyQuestionAnswersMaximum= (state, payload) => {

    let newState = state.update('questions', (questions) =>
        questions.updateIn(
                [
                    questions.findIndex((question) => (
                        question.get('title') === payload.title
                        &&
                        question.get('type') === payload.type
                    )),
                    "answersEnableMaximum"
                ],

                (option) => {return true}
        )
    );

    return newState;
}

export {
   enableSurveyQuestionAnswersMaximum,
}
