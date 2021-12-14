import PropTypes from 'prop-types'

const Header = ({ title }) => {
    
    
    return (
        <header>
            <h1>{title}</h1>
            <button onClick={onClick}>Add</button>
            
        </header>
    )
}
Header.defaultProps = {
    title:"Task Tracker",
}
Header.propTypes = {
    title:PropTypes.string.isRequired,
}
//CSS in Js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'yellow',
// }
export default Header
