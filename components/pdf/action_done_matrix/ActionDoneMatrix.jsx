import React from "react";
import styles from "./ActionDoneMatrix.module.css";
import ActionDoneMatrixItem from "./ActionDoneMatrixItem";

const ActionDoneMatrix = React.forwardRef((props, ref) => {
  const {
    coordinator,
    imdCoordinator,
    citlDirector,
    vpaa,
    peerSuggestionItems = [],
    chairpersonSuggestionItems = [],
    coordinatorSuggestionItems = [],
    iMDCoordinatorSuggestionItems = [],
  } = props;
  return (
    <div className={(styles["c30"], styles["doc-content"])} ref={ref}>
      <div>
        <p className={(styles["custom-p"], styles["c18"], styles["c12"])}>
          <span className={styles["c2"]}></span>
        </p>
        <a id='t.8028bd22508979a6126b168a89078516830aab03'></a>
        <a id='t.2'></a>
        <table className={styles["c13"]}>
          <tbody>
            <tr className={styles["c5"]}>
              <td className={(styles["custom-td"], styles["c23"])}>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "74.03px",
                      height: "74.74px",
                    }}
                  >
                    <img
                      alt='C:\Users\charlotte\AppData\Local\Microsoft\Windows\INetCache\Content.Word\bsu.png'
                      src='/pdf_images/image1.png'
                      style={{
                        width: "74.03px",
                        height: "74.74px",
                        marginLeft: "0px",
                        marginTop: "0px",
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=''
                    />
                  </span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c26"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={(styles["c31"], styles["c35"])}>
                    BUKIDNON STATE UNIVERSITY
                  </span>
                </p>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={(styles["c27"], styles["c31"])}>
                    Malaybalay City, Bukidnon 8700
                  </span>
                </p>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c27"]}>
                    Tel (088) 813-5661 to 5663; TeleFax (088) 813-2717,{" "}
                  </span>
                  <span className={styles["c24"]}>
                    <a
                      className={styles["c38"]}
                      href='https://www.google.com/url?q=http://www.buksu.edu.ph&amp;sa=D&amp;source=editors&amp;ust=1683166734883886&amp;usg=AOvVaw37lrCK-x6mgFbXLF3ZKfvS'
                    >
                      www.buksu.edu.ph
                    </a>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <p className={(styles["custom-p"], styles["c18"], styles["c12"])}>
          <span className={styles["c2"]}></span>
        </p>
        <p className={(styles["custom-p"], styles["c18"], styles["c12"])}>
          <span className={styles["c2"]}></span>
        </p>
      </div>
      <p className={(styles["custom-p"], styles["c11"])}>
        <span className={styles["c1"]}>Suggestions and Action Taken</span>
      </p>
      <p className={(styles["custom-p"], styles["c11"], styles["c12"])}>
        <span className={styles["c1"]}></span>
      </p>
      <div className={styles["center"]}>
        <p className={(styles["custom-p"], styles["c6"])}>
          <span className={styles["c16"]}>Part A. Program Review</span>
        </p>
        <a id='t.12ed2be3307cab679ca4b0475dfaba40fc6c1255'></a>
        <a id='t.0'></a>
        <table className={styles["c3"]}>
          <tbody>
            <tr className={styles["c5"]}>
              <td className={(styles["custom-td"], styles["c19"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c1"]}>Suggestions</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c20"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c1"]}>Action Taken</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c7"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c9"]}>Page Number</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c14"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c1"]}>Remarks</span>
                </p>
              </td>
            </tr>
            {peerSuggestionItems.map((peerSuggestionItem) => (
              <ActionDoneMatrixItem
                key={peerSuggestionItem.id}
                value={peerSuggestionItem.value}
                pageNumber={peerSuggestionItem.pageNumber}
                remarks={peerSuggestionItem.remarks}
                actionTaken={peerSuggestionItem.actionTaken}
              />
            ))}
            {chairpersonSuggestionItems.map((chairpersonSuggestionItem) => (
              <ActionDoneMatrixItem
                key={chairpersonSuggestionItem.id}
                value={chairpersonSuggestionItem.value}
                pageNumber={chairpersonSuggestionItem.pageNumber}
                remarks={chairpersonSuggestionItem.remarks}
                actionTaken={chairpersonSuggestionItem.actionTaken}
              />
            ))}
            {coordinatorSuggestionItems.map((coordinatorSuggestionItem) => (
              <ActionDoneMatrixItem
                key={coordinatorSuggestionItem.id}
                value={coordinatorSuggestionItem.value}
                pageNumber={coordinatorSuggestionItem.pageNumber}
                remarks={coordinatorSuggestionItem.remarks}
                actionTaken={coordinatorSuggestionItem.actionTaken}
              />
            ))}
          </tbody>
        </table>
        <p className={(styles["custom-p"], styles["c6"], styles["c12"])}>
          <span className={(styles["c27"], styles["c37"])}></span>
        </p>
        <p className={(styles["custom-p"], styles["c6"], styles["c12"])}>
          <span className={(styles["c37"], styles["c27"])}></span>
        </p>

        <div>
          <p className={(styles["custom-p"], styles["c6"], "block text-left")}>
            <span className={styles["c1"]}>Reviewed by:</span>
          </p>
          <p
            className={
              (styles["custom-p"],
              styles["c6"],
              styles["c1"],
              "text-center pt-3 underline")
            }
          >
            {coordinator}
          </p>
          <p
            className={
              (styles["custom-p"], styles["c6"], styles["c1"], "text-center")
            }
          >
            <span className={styles["c1"]}>Program IM Coordinator</span>
          </p>
        </div>

        <p className={(styles["custom-p"], styles["c6"], styles["c12"])}>
          <span className={styles["c1"]}></span>
        </p>
        <p className={(styles["custom-p"], styles["c6"])}>
          <span className={styles["c28"]}>Part B. CITL Review</span>
        </p>
        <a id='t.12ed2be3307cab679ca4b0475dfaba40fc6c1255'></a>
        <a id='t.1'></a>
        <table className={styles["c3"]}>
          <tbody>
            <tr className={styles["c5"]}>
              <td className={(styles["custom-td"], styles["c15"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c1"]}>Suggestions</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c4"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c1"]}>Action Taken</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c0"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c9"]}>Page Number</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c14"])}>
                <p className={(styles["custom-p"], styles["c11"])}>
                  <span className={styles["c1"]}>Remarks</span>
                </p>
              </td>
            </tr>
            {iMDCoordinatorSuggestionItems.map(
              (iMDCoordinatorSuggestionItem) => (
                <ActionDoneMatrixItem
                  key={iMDCoordinatorSuggestionItem.id}
                  value={iMDCoordinatorSuggestionItem.value}
                  pageNumber={iMDCoordinatorSuggestionItem.pageNumber}
                  remarks={iMDCoordinatorSuggestionItem.remarks}
                  actionTaken={iMDCoordinatorSuggestionItem.actionTaken}
                />
              )
            )}
          </tbody>
        </table>
        <p className={(styles["custom-p"], styles["c6"], styles["c12"])}>
          <span className={styles["c1"]}></span>
        </p>
        <p className={(styles["custom-p"], styles["c6"], styles["c12"])}>
          <span className={styles["c1"]}></span>
        </p>

        <div className='mb-2'>
          <p className={(styles["custom-p"], styles["c6"], "block text-left")}>
            <span className={styles["c1"]}>Reviewed by:</span>
          </p>
          <p
            className={
              (styles["custom-p"],
              styles["c6"],
              styles["c1"],
              "text-center pt-5 underline")
            }
          >
            {imdCoordinator}
          </p>
          <p
            className={
              (styles["custom-p"], styles["c6"], styles["c1"], "text-center")
            }
          >
            <span className={styles["c1"]}>IDD Coordinator</span>
          </p>
          <p
            className={
              (styles["custom-p"],
              styles["c6"],
              styles["c1"],
              "text-center pt-5 underline")
            }
          >
            {citlDirector}
          </p>
          <p
            className={
              (styles["custom-p"], styles["c6"], styles["c1"], "text-center")
            }
          >
            <span className={styles["c1"]}>CITL Director</span>
          </p>
          <p
            className={
              (styles["custom-p"],
              styles["c6"],
              styles["c1"],
              "text-center pt-5 underline")
            }
          >
            {vpaa}
          </p>
          <p
            className={
              (styles["custom-p"], styles["c6"], styles["c1"], "text-center")
            }
          >
            <span className={styles["c1"]}>VPAA</span>
          </p>
        </div>
      </div>
      <div>
        <p className={(styles["custom-p"], styles["c12"], styles["c17"])}>
          <span className={styles["c2"]}></span>
        </p>
        <a id='t.f5771b2c111e360ab42eddf86b86c8c6f1119da7'></a>
        <a id='t.3'></a>
        <table className={styles["c13"]}>
          <tbody>
            <tr className={styles["c29"]}>
              <td className={(styles["custom-td"], styles["c33"])}>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>Document Code: </span>
                </p>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>CITL-F-003</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c32"])}>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>Revision No.</span>
                </p>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>
                    &nbsp; &nbsp; &nbsp; &nbsp; 00 &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;
                  </span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c36"])}>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>Issue no.</span>
                </p>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>&nbsp; &nbsp; &nbsp;1</span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c21"])}>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>Issue Date: </span>
                </p>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>December 7, 2020 &nbsp; </span>
                </p>
              </td>
              <td className={(styles["custom-td"], styles["c25"])}>
                <p className={(styles["custom-p"], styles["c18"])}>
                  <span className={styles["c8"]}>
                    &nbsp; &nbsp; &nbsp; &nbsp;Page 1 of 1
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className={(styles["custom-p"], styles["c18"], styles["c12"])}>
          <span className={styles["c22"]}></span>
        </p>
      </div>
    </div>
  );
});

ActionDoneMatrix.displayName = "ActionDoneMatrix";
export default ActionDoneMatrix;
