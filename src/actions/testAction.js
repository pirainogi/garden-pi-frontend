export const testAction = () => dispatch => {
 dispatch({
  type: 'TEST_ACTION',
  payload: 'result_of_simple_action'
 })
}
