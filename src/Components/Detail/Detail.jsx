import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";
import bookmark from "../../Assets/Icons/bookmark.png";
// import wine from "../../Assets/Images/wine.png";

function Detail({ loading, setLoading, productID, addItem, addBookmark }) {
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    showDetail();
  }, []);

  const showDetail = () => {
    setLoading(true);
    fetch(
      // `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${productID}`
      `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/263579`
    )
      .then((res) => res.json())
      .then((result) => {
        const product = result.value;
        // console.log(product);
        setProductDetail([...productDetail, product]);
        // console.log(productDetail);
        setLoading(false);
      })
      .catch(() => {
        alert("Please Refresh the Website.");
        setLoading(false);
      });
  };

  return (
    <>
      {productDetail.length > 0
        ? productDetail.map((data) => {
            if (loading) {
              return (
                <div className={styles.card}>
                  <div className={styles.navigation}> Processing Data ...</div>
                </div>
              );
            } else {
              return (
                <div className={styles.card} key={data.id}>
                  <div className={styles.navigation}>
                    <div>home</div>
                    <div>{">"}</div>
                    <div>products</div>
                    <div>{">"}</div>
                    <div>{data.type}</div>
                    <div>{">"}</div>
                    <div>{data.country}</div>
                  </div>
                  <div className={styles.arrow}>
                    <div>{"<"}</div>
                  </div>
                  <div className={styles.details}>
                    <img src={data.image} alt="wine" className={styles.image} />
                    <div className={styles.coloumn}>
                      <div className={styles.name}>{data.name}</div>
                      <div className={styles.type}>
                        <div className={styles.variety}>
                          {data.grapeVarieties}
                        </div>
                        {data.vintageYear !== 0 ? (
                          <div className={styles.year}>{data.vintageYear}</div>
                        ) : (
                          <div className={styles.year}>(Non Vintage)</div>
                        )}
                      </div>
                      <div className={styles.priceRow}>
                        <div className={styles.price}>S$ {data.price}</div>
                        <div className={styles.btnColomn}>
                          {data.qty === 0 ? (
                            <button className={styles.btnDisabled}>
                              out of stock
                            </button>
                          ) : (
                            <button className={styles.button} onClick={addItem}>
                              add to cart
                            </button>
                          )}
                          <img
                            src={bookmark}
                            alt="bookmark"
                            className={styles.bookmark}
                            onClick={addBookmark}
                          />
                        </div>
                      </div>
                      <div className={styles.detailRow}>
                        <div>
                          <div className={styles.subheader}>region</div>
                          <div className={styles.info}>{data.region}</div>
                        </div>
                        <div>
                          <div className={styles.subheader}>producer</div>
                          <div className={styles.info}>{data.producer}</div>
                        </div>
                        <div>
                          <div className={styles.subheader}>bottle</div>
                          <div className={styles.info}>{data.bottleSize}ml</div>
                        </div>
                        <div>
                          <div className={styles.subheader}>alcohol</div>
                          <div className={styles.info}>{data.alcohol}%</div>
                        </div>
                      </div>
                      <div className={styles.description}>
                        <div className={styles.subheader}>description</div>
                        <div className={styles.info}>{data.description}</div>
                      </div>
                      <div className={styles.description}>
                        <div className={styles.subheader}>tasting notes</div>
                        <div className={styles.info}>{data.tastingNotes}</div>
                      </div>
                    </div>
                    <Link to="/">
                      {data.qty === 0 ? (
                        <button className={styles.mobileBtnDisabled}>
                          out of stock
                        </button>
                      ) : (
                        <button className={styles.mobileBtn} onClick={addItem}>
                          add to cart
                        </button>
                      )}
                    </Link>
                  </div>
                </div>
              );
            }
          })
        : ""}
    </>
  );
}

export default Detail;

/* <div className={styles.card}>
    <div className={styles.navigation}>
      <div>home</div>
      <div>{">"}</div>
      <div>products</div>
      <div>{">"}</div>
      <div>cabernet sauvignon</div>
      <div>{">"}</div>
      <div>france</div>
    </div>
    <div className={styles.details}>
      <img src={wine} alt="wine" className={styles.image} />
      <div className={styles.coloumn}>
        <div className={styles.name}>
          domain bott-geyl alsace pinot gris grand cru "sonnenglanz" 2011
        </div>
        <div className={styles.type}>
          <div className={styles.variety}>cabernet sauvignon </div>
          <div className={styles.year}>2015</div>
        </div>
        <div className={styles.priceRow}>
          <div className={styles.price}>S$ 75.00</div>
          <div className={styles.btnColomn}>
            <button
              className={styles.button}
              // onClick={addItem}
            >
              add to cart
            </button>
            <img
              src={bookmark}
              alt="bookmark"
              className={styles.bookmark}
              // onClick={addBookmark}
            />
          </div>
        </div>
        <div className={styles.detailRow}>
          <div>
            <div className={styles.subheader}>region</div>
            <div className={styles.info}>bordeaux, france</div>
          </div>
          <div>
            <div className={styles.subheader}>producer</div>
            <div className={styles.info}>chateau pey de pont</div>
          </div>
          <div>
            <div className={styles.subheader}>bottle</div>
            <div className={styles.info}>750ml</div>
          </div>
          <div>
            <div className={styles.subheader}>alcohol</div>
            <div className={styles.info}>13.00%</div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.subheader}>description</div>
          <div className={styles.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempore, cumque.
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.subheader}>alcohol</div>
          <div className={styles.info}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Suscipit quo, natus sequi eos necessitatibus, vero, rerum cumque
            illum veniam nihil minima earum. Quam, alias saepe.
          </div>
        </div>
      </div>
    </div>
  </div> */
