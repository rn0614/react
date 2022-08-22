import "./style.css";
import renderList from "./listRenderer";
import {debounce} from "./util";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app; // fetcheMoreTrigger 가 있으면 걔 없으면 app
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

// 제일 끝에 가 있으면 loadMore 실행
const onScroll = e => {
  console.dir(e.target.scrollingElement)
  // do something (hint: e.target.scrollingElement)
  //offsetHeight
  //scrollTop + clientHeight == scrollHeight
  //clientHeight
  const {
    scrollHeight,
    scrollTop,
    clientHeight
  } = e.target.scrollingElement;
  if (Math.ceil(scrollTop) + clientHeight >=scrollHeight){
    loadMore();
  }
};

document.addEventListener("scroll", onScroll);
loadMore();
