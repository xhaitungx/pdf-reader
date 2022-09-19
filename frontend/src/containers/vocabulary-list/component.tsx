import React from "react";
import { VocabularyListProps, VocabularyListStates } from "./interface";
import VocabularyTable from "../../components/vocabulary-table";
import Loading from "../../components/loading";
import { VocabulariesApi } from "../../api";
import "./style.css";
class VocabularyList extends React.Component<
  VocabularyListProps,
  VocabularyListStates
> {
  constructor(props: VocabularyListProps) {
    super(props);
  }

  async componentDidMount() {
    if (!this.props.vocabularies) {
      const result = await VocabulariesApi("getVocabularies");
      console.log(result.vocabularies);
      if (result.vocabularies.length > 0) {
        this.props.handleFetchVocabularies(result.vocabularies);
      } else console.log("rong");
    }
  }

  render() {
    return (
      <>
        <h1>VocabularyList</h1>
        {this.props.vocabularies ? (
          <div className="vocabulary-list-container container">
            {this.props.vocabularies.map((listVocabulary) => (
              <VocabularyTable listVocabulary={listVocabulary} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default VocabularyList;
