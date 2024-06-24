import PageTitle from '../PageTitle'
import NewsHolder from './NewsHolder'

class NewsDetail extends NewsHolder {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const { article } = this.props

        const title = article?.title ?? 'Title'
        const image =
            article?.media?.[0]?.['media-metadata']?.[2]?.url ??
            '/assets/images/placeholder.svg'
        const abstract = article?.abstract ?? 'Abstract'
        const source = article?.source ?? 'source'
        const link = article?.url ?? '/'

        return (
            <>
                <PageTitle title={title} />
                <div className="news-section_detail">
                    <div className="container ml-auto mr-auto flex flex-row flex-wrap justify-start gap-[30px]">
                        <div className="flex flex-col w-full">
                            <div className="news-section_detail-image w-full h-[500px]">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs mt-[10px]">{source}</p>
                            <p className="mt-[30px]">{abstract}</p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link}
                                className="mt-[15px] p-2 bg-black text-white max-w-[150px] text-center"
                            >
                                View Article
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsDetail
