function HeartIconBtn ({onClick, isFavorite= false}) {

  // function handleFavorite() {
  //   alert(isFavorite ? '좋아요' : '모르겠어요');
  // }

  // if(isFavorite) {
  //   return (
  //     <button className="btn" onClick={handleFavorite}>
  //       <img className="btn__img" src="/img/heart-icon.svg" alt="" />
  //     </button>
  //   )
  // }
  // return (
  //   <button className="btn">
  //       <img className="btn__img" src="/img/heart-fill-icon.svg" alt="" />
  //     </button>
  // )

  return (
    <button className="btn" onClick={onClick}>
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

export const CourseItem = ({id, title, description, thumbnail, isFavorite, link, onFavorite}) => {

  function handleFavorite(e) {
    // 이벤트 버블링 때문에 종아요만 클릭 되는 것이 아니고
    // 부모 요소까지 클릭이 된다.
    // 이렇게 되는 것을 막기위해 필요하다.
    e.stopPropagation();
    // alert(isFavorite ? '좋아요' : '모르겠어요');
    onFavorite(id, !isFavorite);
  }

  function handleItemClick(e) {
    // e.stopPropagation();
    // alert('item click');
    window.open(link, '_black');
  }

  return (
    // onClickCapture : 캡쳐링 모드
    // 자식의 요소로 이벤트가 전파 된다.
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="image" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description} </div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite = {isFavorite} onClick={handleFavorite}/>
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
