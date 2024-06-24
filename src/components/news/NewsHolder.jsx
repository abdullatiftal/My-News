import { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class NewsHolder extends PureComponent {
    handleClick = () => {
        this.props.onSelect(this.props.article)
    }

    render() {
        const { article } = this.props
        const title = article?.title ?? 'Title'
        const image =
            article?.media?.[0]?.['media-metadata']?.[2]?.url ??
            '/assets/images/placeholder.svg'
        const abstract = article?.abstract ?? 'Abstract'
        const id = article?.id ?? 'asdfasdf'

        return (
            <div className="news-section_holder sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] mb-[10px] pb-[30px] border-b-gray border-b-[1px]">
                <div
                    className="flex flex-col gap-[20px] cursor-pointer"
                    onClick={this.handleClick}
                >
                    <Link className="cursor-pointer" to={`/detail?id=${id}`}>
                        <div className="news-section_holder-image w-full h-[240px]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="news-section_holder-text flex flex-col justify-between">
                            <div className="news-section_text-top">
                                <h3 className="text-xl leading-[1.2] font-semibold mb-2">
                                    {title}
                                </h3>
                                <p>{abstract}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NewsHolder
