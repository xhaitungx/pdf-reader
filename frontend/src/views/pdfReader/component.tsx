import React from "react";
import MultiButton from "../../components/multi-button";
import MenuPopup from "../../components/popups/popup-menu";
import { ViewerProps } from "./interface";
// import RecentBooks from "../../utils/readUtils/recordRecent";
// import BookUtil from "../../utils/fileUtils/bookUtil";
// import BackToMain from "../../components/backToMain";
// import PopupMenu from "../../components/popups/popupMenu";
// import { Toaster } from "react-hot-toast";
// import { handleLinkJump } from "../../utils/readUtils/linkUtil";
// import { pdfMouseEvent } from "../../utils/serviceUtils/mouseEvent";
class Viewer extends React.Component {
  constructor(props: ViewerProps) {
    super(props);
    this.state = {
      href: "",
      title: "",
      cfiRange: null,
      contents: null,
      rect: null,
      pageWidth: 0,
      pageHeight: 0,
      loading: true,
    };
  }
  // UNSAFE_componentWillMount() {
  //   this.props.handleFetchBookmarks();
  //   this.props.handleFetchNotes();
  //   this.props.handleFetchBooks();
  // }
  componentDidMount() {
    // let urls = document.location.href.split("/");
    // let key = urls[urls.length - 1].split("?")[0];
    // localforage.getItem("books").then((result: any) => {
    //   let book;
    //   if (this.props.currentBook.key) {
    //     book = this.props.currentBook;
    //   } else {
    //     book =
    //       result[_.findIndex(result, { key })] ||
    //       JSON.parse(localStorage.getItem("tempBook") || "{}");
    //   }
    //   document.title = book.name + " - Koodo Reader";
    //   this.props.handleReadingState(true);
    //   RecentBooks.setRecent(key);
    //   this.props.handleReadingBook(book);
    //   this.setState({ title: book.name + " - Koodo Reader" });
    //   this.setState({ href: BookUtil.getPDFUrl(book) });
    // });
  }

  render() {
    return (
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
        {/* <BackToMain /> <Toaster /> */}
      </div>
    );
  }
}
export default Viewer;
