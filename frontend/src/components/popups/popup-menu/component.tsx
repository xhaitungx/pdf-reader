import React from "react";
import { MenuPopupProps, MenuPopupStates } from "./interface";
import NotePopup from "../popup-notes";
import TranslatePopup from "../popup-translate";
import "./style.css";
import { transform } from "typescript";

class MenuPopup extends React.Component<MenuPopupProps, MenuPopupStates> {
  constructor(props: MenuPopupProps) {
    super(props);
    this.state = {
      isOpenMenu: false,
      text: "",
      noteRect: null,
      pageWidth: "",
      pageHeight: "",
      pageX: 0,
      pageY: 0,
    };
  }

  componentDidMount() {
    // this.openMenu();
    const viewer = document.querySelector(".ebook-viewer");
    if (viewer) viewer.setAttribute("style", "height:100vh;overflow-y:hidden");
    let pageArea = document.getElementById("page-area");
    if (!pageArea) return;
    let iframe = pageArea.getElementsByTagName("iframe")[0];
    if (!iframe) return;
    iframe.onload = () => {
      let doc: any;
      if (iframe.contentWindow !== null) doc = iframe.contentWindow;

      // this.setState({ loading: false });
      // pdfMouseEvent();
      doc.document.addEventListener("click", (event: any) => {
        event.preventDefault();
        // handleLinkJump(event);
      });
      doc.document.addEventListener("mouseup", (e) => {
        if (this.props.readMode === 0) return;
        if (!doc!.getSelection()) return;
        var noteRect = doc!
          .getSelection()!
          .getRangeAt(0)
          .getBoundingClientRect();
        var text = doc!.getSelection().toString();
        if (text === "") this.setState({ isOpenMenu: false });
        else
          this.setState({
            isOpenMenu: true,
            text,
            noteRect,
            pageWidth: doc.document.body.scrollWidth,
            pageHeight: doc.document.body.scrollHeight,
            pageX: e.pageX,
            pageY: e.pageY,
          });
        // iWin.getSelection() && showHighlight(getHightlightCoords());
      });
    };
    // if (nextProps.rect !== this.props.rect) {
    //   this.setState(
    //     {
    //       rect: nextProps.rect,
    //     },
    //     () => {
    //       this.openMenu();
    //     }
    //   );
    // }
  }

  openMenu = () => {
    let pageArea = document.getElementById("page-area");
    if (!pageArea) return;
    let iframe = pageArea.getElementsByTagName("iframe")[0];
    if (!iframe) return;
    let doc = iframe.contentDocument;
    if (!doc) return;
    let sel = doc.getSelection();
    console.log(doc);
    console.log(sel);

    // console.log(sel?.toString());
    // this.props.handleChangeDirection(false);
    // // 如果 popmenu正在被展示，则隐藏
    // if (this.props.isOpenMenu) {
    //   this.props.handleMenuMode("menu");
    //   this.props.handleOpenMenu(false);
    //   this.props.handleNoteKey("");
    // }
    // if (!sel) return;
    // // 使弹出菜单更加灵活可控;
    // if (sel.isCollapsed) {
    //   this.props.isOpenMenu && this.props.handleOpenMenu(false);
    //   this.props.handleMenuMode("menu");
    //   this.props.handleNoteKey("");
    //   return;
    // }
    // this.showMenu();
    // this.props.handleMenuMode("menu");
  };

  closePopupMenu = () => {
    this.setState({
      isOpenMenu: false,
      text: "",
    });
  };

  render() {
    return (
      <>
        {this.props.readMode !== 0 && (
          <div
            className="pop-up-menu-container"
            onMouseLeave={this.closePopupMenu}
            style={{
              display: this.state.isOpenMenu ? "" : "none",
              left: this.state.pageX + "px",
              top: this.state.pageY + "px",
              transform: "translate(-125px, -62px)",
            }}
          >
            <div className="pop-up-menu-content">
              {this.props.readMode === 1 && this.state.text && (
                <TranslatePopup
                  text={this.state.text}
                  closeMenu={this.closePopupMenu}
                />
              )}
              {this.props.readMode === 2 && (
                <NotePopup
                  text={this.state.text}
                  rect={this.state.noteRect}
                  closeMenu={this.closePopupMenu}
                />
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MenuPopup;
