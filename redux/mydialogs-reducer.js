const UPDATE_INPUT_MESSAGE_TEXT = "UPDATE_INPUT_MESSAGE_TEXT"
const POST_MESSAGE = "POST_MESSAGE"

let initialState = {

    messages: [ 
        {id: 1, messageText: "Тестовое сообщение"},
        {id: 2, messageText: "Тестовое сообщение 2"}
    ],
    inputmessageText: ""
}

const mydialogsReducer = (state = initialState, action) =>{

    switch (action.type) {
        case UPDATE_INPUT_MESSAGE_TEXT:
             return {
                ...state,
                inputmessageText: action.text 
             }
        case POST_MESSAGE:
            let text = state.inputmessageText
        return {
            ...state,
            inputmessageText: "",
            messages: [...state.messages, {id: 3, messageText: text}]

            }
            default:
                return state;
    }


}
export const PostMessageCreator = () => ({type: POST_MESSAGE})
export const updateInputMessageTextCreator = (text) =>
    ({type: UPDATE_INPUT_MESSAGE_TEXT, text: text})


export default mydialogsReducer