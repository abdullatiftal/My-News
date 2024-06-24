import { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import Loading from './Loading'
import PageTitle from './PageTitle'
import NewsHolder from './news/NewsHolder'

class Main extends PureComponent {
    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(article) {
        const { onSelect } = this.props

        onSelect(article)
    }

    render() {
        const { news, loading, error } = this.props
        const isLoading = loading ?? false
        const isError = error ?? false

        return (
            <>
                <PageTitle title="Most popular news" />
                <div className="news-section">
                    <div className="container ml-auto mr-auto flex flex-row flex-wrap justify-start gap-[30px]">
                        {isLoading ? (
                            <Loading />
                        ) : isError ? (
                            <h3>There was an error loading the data...</h3>
                        ) : (
                            news &&
                            news.results.map((article) => (
                                <Fragment key={article.id}>
                                    <NewsHolder
                                        key={article.id}
                                        article={article}
                                        onSelect={this.handleSelect}
                                        id={article.id}
                                    />
                                </Fragment>
                            ))
                        )}
                    </div>
                </div>
            </>
        )
    }
}

Main.propTypes = {
    news: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.bool,
}

export default Main
