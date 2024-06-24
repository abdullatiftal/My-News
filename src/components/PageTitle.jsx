import PropTypes from 'prop-types'

const PageTitle = ({ title = 'No Title' }) => {
    return (
        <div className="container ml-auto mr-auto">
            <h1 className="py-[60px] text-center text-4xl font-bold capitalize">
                {title}
            </h1>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string,
}

export default PageTitle
