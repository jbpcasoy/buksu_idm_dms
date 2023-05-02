import React from "react";
import styles from "./IMReview.module.css";
import IMReviewSection from "./IMReviewSection";

const IMReview = React.forwardRef((props, ref) => {
  const {
    imTitle,
    authors,
    imType,
    sections,
    coordinator,
    peer,
    chairperson,
    reviewItems,
  } = props;
  console.log({ peer });

  return (
    <div
      className={
        (styles["c44"], styles["doc-content"], styles["printable"], "text-left")
      }
      ref={ref}
    >
      <div>
        <p className={(styles["custom-p"], styles["c32"], styles["c21"])}>
          <span className={styles["c25"]}></span>
        </p>
        <a id='t.8d6cbcef5c12f35a7cf8a1413961d016209e61d9'></a>
        <a id='t.2'></a>
        <table className={styles["c16"]}>
          <tbody>
            <tr className={styles["c12"]}>
              <td
                className={(styles["custom-td"], styles["c34"])}
                colspan='1'
                rowspan='1'
              >
                <span className={(styles["custom-p"], styles["c19"])}>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <img
                      alt='BukSU Logo'
                      src='/im_review/images/image1.png'
                      style={{
                        width: "55px",
                        height: "55px",
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=''
                    />
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <img
                      alt='CITL Logo'
                      src='/im_review/images/image2.png'
                      style={{
                        width: "55px",
                        height: "55px",
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                      }}
                      title=''
                    />
                  </span>
                </span>
              </td>
              <td
                className={(styles["custom-td"], styles["c36"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c24"])}>
                  <span className={styles["c51"]}>
                    BUKIDNON STATE UNIVERSITY
                  </span>
                </p>
                <p className={(styles["custom-p"], styles["c19"])}>
                  <span className={styles["c2"]}>
                    Malaybalay City, Bukidnon 8700
                  </span>
                </p>
                <p className={(styles["custom-p"], styles["c19"])}>
                  <span className={styles["c48"]}>
                    Tel (088) 813-5661 to 5663; TeleFax (088) 813-2717,{" "}
                  </span>
                  <span className={(styles["c48"], styles["c50"])}>
                    <a
                      className={styles["c5"]}
                      href='https://www.google.com/url?q=http://www.buksu.edu.ph&amp;sa=D&amp;source=editors&amp;ust=1683006721821628&amp;usg=AOvVaw2e9tA1kvXOhZOLdnKIjUbj'
                    >
                      www.buksu.edu.ph
                    </a>
                  </span>
                </p>
                <p
                  className={(styles["custom-p"], styles["c19"], styles["c21"])}
                >
                  <span className={styles["c33"]}></span>
                </p>
                <p className={(styles["custom-p"], styles["c24"])}>
                  <span className={styles["c56"]}>
                    OFFICE OF THE VICE PRESIDENT FOR ACADEMIC AFFAIRS
                  </span>
                </p>
                <p className={(styles["custom-p"], styles["c19"])}>
                  <span className={(styles["c48"], styles["c53"])}>
                    Center for Innovative Teaching and Learning
                  </span>
                </p>
              </td>
              <td
                className={(styles["custom-td"], styles["c26"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c19"])}>
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                      margin: "0px 0px",
                      border: "0px solid #000000",
                      transform: "rotate(0rad) translateZ(0px)",
                      WebkitTransform: "rotate(0rad) translateZ(0px)",
                      width: "130px",
                      height: "69.67px",
                    }}
                  >
                    <img
                      alt='CITL Motto'
                      src='/im_review/images/image3.png'
                      style={{
                        overflow: "hidden",
                        display: "inline-block",
                        margin: "0px 0px",
                        border: "0px solid #000000",
                        transform: "rotate(0rad) translateZ(0px)",
                        WebkitTransform: "rotate(0rad) translateZ(0px)",
                        width: "96.67px",
                        height: "69.67px",
                      }}
                      title=''
                    />
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className={(styles["custom-p"], styles["c21"], styles["c32"])}>
          <span className={styles["c25"]}></span>
        </p>
      </div>
      <p className={(styles["custom-p"], styles["c10"])}>
        <span className={styles["c40"]}>
          Instructional Materials Review Form
        </span>
      </p>
      <p className={(styles["custom-p"], styles["c10"])}>
        <span className={styles["c1"]}>(Implementation Phase)</span>
      </p>
      <p className={(styles["custom-p"], styles["c35"], styles["c21"])}>
        <span className={styles["c1"]}></span>
      </p>
      <div className={styles["center"]}>
        <p className={(styles["custom-p"], styles["c35"])}>
          <span className={styles["c1"]}>
            Title of IM: <span className='underline'>{imTitle}</span>
          </span>
        </p>
        <p className={(styles["custom-p"], styles["c35"])}>
          <span className={styles["c1"]}>
            Author/s: <span className='underline'>{authors}</span>
          </span>
        </p>
        <p className={(styles["custom-p"], styles["c35"])}>
          <span className={styles["c1"]}>
            IM Type: <span className='underline'>{imType}</span>
          </span>
        </p>
        <p className={(styles["custom-p"], styles["c10"], styles["c21"])}>
          <span className={styles["c39"]}></span>
        </p>
        <p className={(styles["custom-p"], styles["c35"])}>
          <span className={(styles["c18"], styles["c45"])}>
            To the Reviewers: Check the column corresponding to your rating for
            each item. Be guided by the following descriptions.
          </span>
        </p>
        <div className={styles["center"]}>
          <p className={(styles["custom-p"], styles["c35"])}>
            <span className={styles["c18"]}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className={styles["c1"]}>
              VM
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Very
              Much&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not
              Much&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
          <p className={(styles["custom-p"], styles["c35"])}>
            <span className={styles["c1"]}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Much&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not
              at All
            </span>
          </p>
          <p className={(styles["custom-p"], styles["c35"])}>
            <span className={styles["c1"]}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just
              Enough
            </span>
          </p>
        </div>
        <a id='t.3d3baf7028353c4f5f3f21ddf9c43cb8863ea2f5'></a>
        <a id='t.0'></a>
        <table className={styles["c54"]}>
          <tbody>
            <tr className={styles["c9"]}>
              <td
                className={(styles["custom-td"], styles["c6"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c0"])}>
                  <span className={styles["c14"]}>Criteria</span>
                </p>
              </td>
              <td
                className={(styles["custom-td"], styles["c23"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c0"])}>
                  <span className={styles["c14"]}>VM</span>
                </p>
              </td>
              <td
                className={(styles["custom-td"], styles["c11"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c0"])}>
                  <span className={styles["c14"]}>M</span>
                </p>
              </td>
              <td
                className={(styles["custom-td"], styles["c11"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c0"])}>
                  <span className={styles["c14"]}>JE</span>
                </p>
              </td>
              <td
                className={(styles["custom-td"], styles["c8"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c0"])}>
                  <span className={styles["c14"]}>NM</span>
                </p>
              </td>
              <td
                className={(styles["custom-td"], styles["c17"])}
                colspan='1'
                rowspan='1'
              >
                <p className={(styles["custom-p"], styles["c0"])}>
                  <span className={styles["c14"]}>NAA</span>
                </p>
              </td>
            </tr>
            {sections.map((section) => (
              <IMReviewSection
                reviewItems={reviewItems}
                questions={section?.questions}
                title={section?.title}
              />
            ))}
          </tbody>
        </table>
        <p className={(styles["custom-p"], styles["c15"], styles["c21"])}>
          <span className={styles["c1"]}></span>
        </p>
        <div className='mx-12'>
          <p className={(styles["custom-p"], styles["c15"])}>
            <span className={styles["c1"]}>Reviewed by:</span>
          </p>
          <p className={(styles["custom-p"], styles["c15"], styles["c21"])}>
            <span className={styles["c1"]}></span>
          </p>
          <table className='w-full'>
            <tbody>
              {coordinator && (
                <tr>
                  <td>
                    <p className='underline text-center'>{coordinator}</p>
                    <p className=' text-center'>
                      <span className={styles["c1"]}>
                        IMD Program Coordinator
                      </span>
                    </p>
                  </td>
                </tr>
              )}
              {peer && (
                <tr>
                  <td>
                    <p className='underline text-center'>{peer}</p>
                    <p className=' text-center'>
                      <span className={styles["c1"]}>Senior Faculty</span>
                    </p>
                  </td>
                </tr>
              )}
              {chairperson && (
                <tr>
                  <td className='pt-5'>
                    <p className='underline text-center'>{chairperson}</p>
                    <p className=' text-center'>
                      <span className={styles["c1"]}>Program Chair</span>
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className={(styles["custom-p"], styles["c21"], styles["c22"])}>
          <span className={styles["c1"]}></span>
        </p>
        <p className={(styles["custom-p"], styles["c22"], styles["c21"])}>
          <span className={styles["c1"]}></span>
        </p>
      </div>
      <p className={(styles["custom-p"], styles["c22"], styles["c21"])}>
        <span className={styles["c1"]}></span>
      </p>
      <p className={(styles["custom-p"], styles["c4"])}>
        <span className={styles["c1"]}></span>
      </p>
      <div className={styles["center"]}>
        <p className={(styles["custom-p"], styles["c42"])}>
          <span className={styles["c7"]}>
            Document Code: CITL-F-013 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp;Revision No.: 0 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Issue No.: &nbsp;1 &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Issue Date: July 28,
            2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page{" "}
          </span>
          <span className={styles["c7"]}>&nbsp;of </span>
          <span className={styles["c47"]}>&nbsp;</span>
        </p>
        <p className={(styles["custom-p"], styles["c32"], styles["c21"])}>
          <span className={styles["c25"]}></span>
        </p>
      </div>
    </div>
  );
});
IMReview.displayName = "IMReview";
export default IMReview;
