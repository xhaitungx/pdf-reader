import React from "react";
import MultiButton from "../../components/multi-button";
import MenuPopup from "../../components/popups/popup-menu";
import Loading from "../../components/loading";
import { ViewerProps, ViewerState } from "./interface";
import { BookApi, NoteApi } from "../../api";
import localforage from "localforage";
import { Notes } from "@mui/icons-material";
import Note from "../../model/Note";
import { setTimeout } from "timers";

// import RecentBooks from "../../utils/readUtils/recordRecent";
// import BookUtil from "../../utils/fileUtils/bookUtil";
// import BackToMain from "../../components/backToMain";
// import PopupMenu from "../../components/popups/popupMenu";
// import { Toaster } from "react-hot-toast";
// import { handleLinkJump } from "../../utils/readUtils/linkUtil";
// import { pdfMouseEvent } from "../../utils/serviceUtils/mouseEvent";
class Viewer extends React.Component<ViewerProps, ViewerState> {
  constructor(props: ViewerProps) {
    super(props);
    this.state = {
      noteList: null,
      loading: false,
    };
  }
  // UNSAFE_componentWillMount() {
  //   this.props.handleFetchBookmarks();
  //   this.props.handleFetchNotes();
  //   this.props.handleFetchBooks();
  // }
  async componentDidMount() {
    const currentBook = await localforage.getItem("currentBook");
    if (!currentBook) {
      const bookId = window.location.search.split("=").reverse()[0];
      const result = await BookApi("getBook", bookId);
      document.title = result.books[0].name;
      localforage.setItem("currentBook", {
        Content: result.books[0].content.data,
        md5: result.books[0].md5,
      });
    }
    this.setState({
      loading: false,
    });
    if (!this.state.noteList) {
      const res = await NoteApi("getBookNotes");
      if (res && res.status === 200) {
        this.setState({
          noteList: res.data,
        });
      }
    }
    setTimeout(() => {
      this.showPDFHighlight();
    }, 5000);
  }

  showPDFHighlight = () => {
    let iWin = this.getPDFIframeDoc();
    if (!iWin) return;
    if (this.state.noteList)
      this.state.noteList.list.map((note) => {
        const selected = JSON.parse(note.range);
        var pageIndex = selected.page;
        if (!iWin.PDFViewerApplication.pdfViewer) return;
        var page = iWin.PDFViewerApplication.pdfViewer.getPageView(pageIndex);
        if (page && page.div) {
          console.log("ok");
          var pageElement = page.div;
          var viewport = page.viewport;
          selected.coords.forEach((rect) => {
            var bounds = viewport.convertToViewportRectangle(rect);
            var el = iWin.document.createElement("div") as HTMLElement;
            el.setAttribute("id", "tung");
            el.setAttribute(
              "style",
              "position: absolute;" +
                "cursor: pointer;" +
                "opacity: 0.4;" +
                "background-color:" +
                note.color +
                "; left:" +
                Math.min(bounds[0], bounds[2]) +
                "px; top:" +
                Math.min(bounds[1], bounds[3]) +
                "px;" +
                "width:" +
                Math.abs(bounds[0] - bounds[2]) +
                "px; height:" +
                Math.abs(bounds[1] - bounds[3]) +
                "px; z-index:0;"
            );
            el.setAttribute("key", "sss");
            el.setAttribute("class", "pdf-note");
            el.addEventListener("click", (event: any) => {
              this.handlePDFClick(event);
            });
            pageElement.appendChild(el);
          });
        }
      });
  };

  getPDFIframeDoc = () => {
    let pageArea = document.getElementById("page-area");
    if (!pageArea) return null;
    let iframe = pageArea.getElementsByTagName("iframe")[0];
    if (!iframe) return null;
    let iWin: any = iframe.contentWindow;
    if (!iWin) return null;
    return iWin;
  };

  handlePDFClick = (event: any) => {
    console.log("click note");
    // this.setState({ rect: event.currentTarget.getBoundingClientRect() }, () => {
    //   this.showMenu();
    //   this.handleClickHighlighter(event.currentTarget.getAttribute("key"));
    //   event.stopPropagation();
    // });
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="ebook-viewer" id="page-area">
            <MenuPopup />
            <MultiButton />
            {/* {!this.state.loading && (
          <PopupMenu
            {...{
              rendition: {
                on: (status: string, callback: any) => {
                  callback();
                },
              },
              rect: this.state.rect,
              pageWidth: this.state.pageWidth,
              pageHeight: this.state.pageHeight,
              chapterIndex: 0,
              chapter: "0",
            }}
          />
        )} */}
            <iframe
              src={`./lib/pdf/web/viewer.html${window.location.search}`}
              title="hello"
              width="100%"
              height="100%"
            >
              Loading
            </iframe>
            {/* <Toaster /> */}
          </div>
        )}
      </>
    );
  }
}
export default Viewer;
