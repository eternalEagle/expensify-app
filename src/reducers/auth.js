export default (state={},action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: {
                    uid:action.uid
                }
            };
        case 'LOGOUT':
            return {
            };
        default:
            return state;
    }
}