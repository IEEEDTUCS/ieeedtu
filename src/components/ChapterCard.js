import '../styles/chaptercard.css';

const ChapterCard = (props) => {
    const {name, img, content} = props;
    return(<>
        <div className='chapter-item'>
            <img src={img.default} alt={name} className='chapter-img'/>
            <div className='chapter-text'>
                <div className='chapter-name'>{name}</div>
                <div className='chapter-content'>{content}</div>
            </div>
        </div>
    </>)
}

export default ChapterCard;