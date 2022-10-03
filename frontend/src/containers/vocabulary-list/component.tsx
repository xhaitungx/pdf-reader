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
        {this.props.vocabularies ? (
          <div className="vocabulary-list-container container">
            {this.props.vocabularies
              .filter((listVocabulary) => listVocabulary.list.length > 0)
              .map((listVocabulary) => (
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
