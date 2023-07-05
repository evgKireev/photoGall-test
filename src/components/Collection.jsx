import classNames from 'classnames'
import { useState } from 'react'

function Collection({
  name,
  images,
  onClickIdx,
  onClickUrl,
  photoUrl,
  photoIdx,
  desc,
}) {
  const [info, setInfo] = useState(false)
  return (
    <div className="collection">
      <div className={classNames('card', { cardA: info })}>
        <div
          onClick={() => setInfo(true)}
          className={classNames('side', 'front')}
        >
          <img
            className="collection__big"
            src={photoUrl === images[photoIdx] ? images[photoIdx] : images[0]}
            alt="Item"
            title="Подробная информация"
          />
        </div>
        <div
          onClick={() => setInfo(false)}
          className="side back"
        >
          {desc}
          <h2>Ссылки на фотографии:</h2>
          <div className="link">
            {images.map((value, index) => (
              <a href={value}>{`Photo ${index + 1}`}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="collection__bottom">
        {images.map((value, index) => (
          <img
            onClick={() => {
              onClickIdx(index)
              onClickUrl(value)
            }}
            key={index}
            className="collection__mini"
            src={value}
            alt="Item"
          />
        ))}
      </div>
      <h4>{name}</h4>
    </div>
  )
}

export default Collection
