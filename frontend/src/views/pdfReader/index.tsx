import { connect } from "react-redux";
// import {
//   handleActionDialog,
//   handleReadingState,
//   handleReadingBook,
//   handleFetchNotes,
//   handleFetchBookmarks,
//   handleFetchBooks,
// } from "../../store/actions";
import PDFReader from "./component";
// import { stateType } from "../../store";

const mapStateToProps = (state: any) => {
  return {
    isOpenActionDialog: state.book.isOpenActionDialog,
    currentBook: state.book.currentBook,
    isReading: state.book.isReading,
  };
};
const actionCreator = {
  // handleReadingState,
  // handleReadingBook,
  // handleActionDialog,
  // handleFetchNotes,
  // handleFetchBookmarks,
  // handleFetchBooks,
};
export default PDFReader;
