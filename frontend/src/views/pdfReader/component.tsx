import React from "react";
import MultiButton from "../../components/multi-button";
import MenuPopup from "../../components/popups/popup-menu";
import NotePopup from "../../components/popups/popup-notes";
import Loading from "../../components/loading";
import { ViewerProps, ViewerState } from "./interface";
import { BookApi, NoteApi } from "../../api";
import localforage from "localforage";
import { setTimeout } from "timers";
import "./style.css";
class Viewer extends React.Component<ViewerProps, ViewerState> {
  constructor(props: ViewerProps) {
    super(props);
    this.state = {
      noteText: "",
      isOpenNote: false,
      loading: false,
      pageX: 0,
      pageY: 0,
    };
  }

  async componentDidMount() {
    const currentBook = await localforage.getItem("currentBook");
    const bookId = window.location.search.split("=").reverse()[0];
    const result = await BookApi("getBook", bookId);
    document.title = result.books[0].name;
    localforage.setItem("currentBook", {
      Content: result.books[0].content.data,
      md5: result.books[0].md5,
    });
    this.setState({
      loading: false,
    });
  }
  async componentDidUpdate() {
    if (!this.props.bookNotes) {
      console.log("how many");
      const res = await NoteApi("getBookNotes");
      if (res && res.status === 200) {
        this.props.handleFetchBookNotes(res.data);
        const noteEl = document.querySelectorAll(".note");
        console.log(noteEl);
        noteEl.forEach((el) => el.remove());
        setTimeout(() => {
          this.showPDFHighlight();
        }, 1000);
      }
    }
  }

  showPDFHighlight = () => {
    let iWin = this.getPDFIframeDoc();
    if (!iWin) return;
    if (this.props.bookNotes)
      this.props.bookNotes.list.map((note) => {
        const selected = JSON.parse(note.range);
        var pageIndex = selected.page;
        if (!iWin.PDFViewerApplication.pdfViewer) return;
        var page = iWin.PDFViewerApplication.pdfViewer.getPageView(pageIndex);
        if (page && page.div) {
          var pageElement = page.div;
          var viewport = page.viewport;
          selected.coords.forEach((rect) => {
            var bounds = viewport.convertToViewportRectangle(rect);
            var el = iWin.document.createElement("div") as HTMLElement;
            el.setAttribute("id", note._id);
            el.setAttribute("class", "note");
            el.setAttribute(
              "style",
              "position: absolute;" +
                "cursor: pointer;" +
                "opacity: 0.2;" +
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

  handlePDFClick = (e: any) => {
    if (this.props.bookNotes) {
      let noteId = e.currentTarget.getAttribute("id");
      let clickedNote = this.props.bookNotes.list.find(
        (note) => note._id === noteId
      );
      if (!clickedNote) return;
      console.log(clickedNote);
      this.setState({
        isOpenNote: true,
        noteText: clickedNote.note,
        pageX: e.clientX,
        pageY: e.clientY,
      });
    }
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
            {this.state.isOpenNote ? (
              <div
                style={{
                  position: "fixed",
                  top: this.state.pageY + "px",
                  left: this.state.pageX + "px",
                  transform: "translate(-125px, -62px)",
                }}
                // onMouseLeave={(e) =>
                //   this.setState({
                //     isOpenNote: false,
                //   })
                // }
              >
                <textarea value={this.state.noteText} />
              </div>
            ) : (
              <MenuPopup />
            )}
            <MultiButton />
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
