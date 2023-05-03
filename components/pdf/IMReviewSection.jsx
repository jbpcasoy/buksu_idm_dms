import React from "react";
import styles from "./IMReview.module.css";

export default function IMReviewSection({
  reviewItems = [],
  title,
  questions = [],
}) {
  let answeredQuestions = questions.filter((question) => {
    return reviewItems.find((reviewItem) => {
      return reviewItem.questionId === question.id;
    });
  });
  console.log({ noAnswer: answeredQuestions });
  answeredQuestions = answeredQuestions.map((question) => {
    const reviewItem = reviewItems.find(
      (reviewItem) => reviewItem.questionId === question.id
    );

    console.log({ question, reviewItem });

    return { ...question, answer: reviewItem?.answer };
  });
  console.log({ answeredQuestions });

  if (answeredQuestions.length < 1) {
    return null;
  }

  return (
    <>
      <tr className={styles["c9"]}>
        <td
          className={(styles["custom-td"], styles["c6"])}
          colspan='1'
          rowspan='1'
        >
          <p className={(styles["custom-p"], styles["c31"])}>
            <span className={(styles["c41"], styles["c18"])}>{title}</span>
          </p>
        </td>
        <td
          className={(styles["custom-td"], styles["c23"])}
          colspan='1'
          rowspan='1'
        >
          <p className={(styles["custom-p"], styles["c4"])}>
            <span className={styles["c2"]}></span>
          </p>
        </td>
        <td
          className={(styles["custom-td"], styles["c11"])}
          colspan='1'
          rowspan='1'
        >
          <p className={(styles["custom-p"], styles["c4"])}>
            <span className={styles["c2"]}></span>
          </p>
        </td>
        <td
          className={(styles["custom-td"], styles["c11"])}
          colspan='1'
          rowspan='1'
        >
          <p className={(styles["custom-p"], styles["c4"])}>
            <span className={styles["c2"]}></span>
          </p>
        </td>
        <td
          className={(styles["custom-td"], styles["c8"])}
          colspan='1'
          rowspan='1'
        >
          <p className={(styles["custom-p"], styles["c4"])}>
            <span className={styles["c2"]}></span>
          </p>
        </td>
        <td
          className={(styles["custom-td"], styles["c17"])}
          colspan='1'
          rowspan='1'
        >
          <p className={(styles["custom-p"], styles["c4"])}>
            <span className={styles["c2"]}></span>
          </p>
        </td>
      </tr>
      {answeredQuestions.map((question) => {
        return (
          <tr className={styles["c9"]} key={question.id}>
            <td
              className={(styles["custom-td"], styles["c6"])}
              colspan='1'
              rowspan='1'
            >
              <ul className={(styles["c13"], styles["lst-kix_list_1-0"])}>
                <li
                  className={
                    (styles["custom-li"], styles["c3"], styles["li-bullet-0"])
                  }
                >
                  <span className={styles["c2"]}>{question.label}</span>
                </li>
              </ul>
            </td>
            <td
              className={(styles["custom-td"], styles["c23"])}
              colspan='1'
              rowspan='1'
            >
              <p className={(styles["custom-p"], styles["c4"])}>
                <span className={styles["c2"]}>
                  {question?.answer === "VM" && "✓"}
                </span>
              </p>
            </td>
            <td
              className={(styles["custom-td"], styles["c11"])}
              colspan='1'
              rowspan='1'
            >
              <p className={(styles["custom-p"], styles["c4"])}>
                <span className={styles["c2"]}>
                  {question?.answer === "M" && "✓"}
                </span>
              </p>
            </td>
            <td
              className={(styles["custom-td"], styles["c11"])}
              colspan='1'
              rowspan='1'
            >
              <p className={(styles["custom-p"], styles["c4"])}>
                <span className={styles["c2"]}>
                  {question?.answer === "JE" && "✓"}
                </span>
              </p>
            </td>
            <td
              className={(styles["custom-td"], styles["c8"])}
              colspan='1'
              rowspan='1'
            >
              <p className={(styles["custom-p"], styles["c4"])}>
                <span className={styles["c2"]}>
                  {question?.answer === "NM" && "✓"}
                </span>
              </p>
            </td>
            <td
              className={(styles["custom-td"], styles["c17"])}
              colspan='1'
              rowspan='1'
            >
              <p className={(styles["custom-p"], styles["c4"])}>
                <span className={styles["c2"]}>
                  {question?.answer === "NAA" && "✓"}
                </span>
              </p>
            </td>
          </tr>
        );
      })}
    </>
  );
}
