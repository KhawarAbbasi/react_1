import PropTypes from 'prop-types'

const Header = (props) => {
    
    
    return (
        <header>
            <h1>{props.title}</h1>
            
        </header>
    )
}
// Header.defaultProps = {
//     title:"Task Tracker",
// }
// Header.propTypes = {
//     title:PropTypes.string.isRequired,
// }
//CSS in Js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'yellow',
// }
export default Header
