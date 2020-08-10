import React from 'react'
import { connect } from 'react-redux'

function TestContainer(props) {
    console.log('test',props)
    return (
        <div>
            <h1>List Container</h1>
            {props.tests}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         tests: state.tests
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchTestSuccess: () => dispatch(fetchTestSuccess())
//     }
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TestContainer)
