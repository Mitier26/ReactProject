function HeartIconBtn ({isFavorite= false}) {
  if(isFavorite) {
    return (
      <button className="btn">
        <img className="btn__img" src="/img/heart-icon.svg" alt="" />
      </button>
    )
  }
  return (
    <button className="btn">
        <img className="btn__img" src="/img/heart-fill-icon.svg" alt="" />
      </button>
  )

  return (
    <button className="btn">
        <img className="btn__img" src={isFavorite ? "/img/heart-icon.svg" : "/img/heart-fill-icon.svg"} alt="" />
      </button>
  )

  return null;
}

function LinkIconBtn ({link}) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer" >
          <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  )
}

export const CourseItem = ({title, description, thumbnail, isFavorite, link}) => {

  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="image" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description} </div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite = {isFavorite}/>
        {/* <button className="btn">
          {
            isFavorite ? <img className="icon-heart" src="/img/heart-icon.svg" alt="" /> :
            <img className="icon-heart" src="/img/heart-fill-icon.svg" alt="" />
          }
        </button> */}
        {link && <LinkIconBtn link={link}/>}
        
      </div>
    </article>
  )
}
