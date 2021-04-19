import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import styles from "./List.module.css";
import bookmark from "../../Assets/Icons/bookmark.png";
import load from "../../Assets/Icons/loading.gif";
// import wine from "../../Assets/Images/wine.png";

function List({
  wineList,
  loading,
  productNumber,
  addItem,
  addBookmark,
  showList,
  loadMore,
}) {
  return (
    <>
      <div className={styles.website}>
        <InfiniteScroll
          dataLength={wineList.length}
          next={loadMore}
          hasMore={true}
          loader={
            <li className={styles.card}>
              <img src={load} alt="loading" />
              {/* <h5>Loading...</h5> */}
            </li>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all!</b>
            </p>
          }
        >
          <div className={styles.row}>
            {
              wineList.length > 0
                ? wineList.map((data) => {
                    // console.log(data.id);
                    if (loading) {
                      return (
                        <li key={data.id} className={styles.card}>
                          <img src={load} alt="loading" />
                        </li>
                      );
                    } else {
                      return (
                        <li className={styles.card} key={data.id} id={data.id}>
                          <img
                            src={data.image}
                            alt={data.image}
                            className={styles.image}
                          />
                          <div className={styles.coloumn}>
                            <Link
                              to="/detail"
                              className={styles.link}
                              onClick={productNumber}
                            >
                              <div className={styles.info}>
                                <div className={styles.name}>
                                  {data.name} {data.vintageYear}
                                </div>
                                <div className={styles.variety}>
                                  {data.grapeVarietes}
                                </div>
                                <div className={styles.location}>
                                  {data.region}, {data.country}
                                </div>
                              </div>
                              <div className={styles.priceColomn}>
                                <div className={styles.price}>
                                  S$ {data.price}
                                </div>
                                <button
                                  className={
                                    data.qty < 5 ? styles.quantity : styles.hide
                                  }
                                >
                                  {data.qty} <br />
                                  left
                                </button>
                              </div>
                            </Link>
                            <div className={styles.btnColomn}>
                              {data.qty === 0 ? (
                                <button className={styles.btnDisabled}>
                                  out of stock
                                </button>
                              ) : (
                                <button
                                  className={styles.button}
                                  onClick={addItem}
                                >
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
                        </li>
                      );
                    }
                  })
                : ""
              // alert("Loading takes too long, please refresh the page.")
            }
          </div>
        </InfiniteScroll>
      </div>
      <div className={styles.mobile}>
        <div className={styles.row}>
          {
            wineList.length > 0
              ? wineList.map((data) => {
                  return (
                    <Link to="/detail">
                      <div className={styles.card} key={data.id}>
                        <img
                          src={data.image}
                          alt={data.image}
                          className={styles.image}
                        />
                        <div className={styles.coloumn}>
                          <div>
                            <div className={styles.name}>
                              {data.name} {data.vintageYear}
                            </div>
                            <div className={styles.variety}>
                              {data.grapeVarietes}
                            </div>
                            <div className={styles.location}>
                              {data.region}, {data.country}
                            </div>
                          </div>
                          <div>
                            <div className={styles.priceColomn}>
                              <div className={styles.price}>
                                S$ {data.price}
                              </div>
                              <button
                                className={
                                  data.qty < 5 ? styles.quantity : styles.hide
                                }
                              >
                                {data.qty} <br />
                                left
                              </button>
                            </div>
                            <div className={styles.btnColomn}>
                              {data.qty === 0 ? (
                                <button className={styles.btnDisabled}>
                                  out of stock
                                </button>
                              ) : (
                                <button
                                  className={styles.button}
                                  onClick={addItem}
                                >
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
                        </div>
                      </div>
                    </Link>
                  );
                })
              : ""
            // alert("Loading takes too long, please refresh the page.")
          }
        </div>
      </div>
    </>
  );
}

export default List;

/* 
<div className={styles.card}>
  <img src={wine} alt="wine" className={styles.image} />
  <div className={styles.coloumn}>
    <div>
      <div className={styles.name}>
        domain bott-geyl alsace pinot gris grand cru "sonnenglanz" 2011
      </div>
      <div className={styles.variety}>cabernet sauvignon</div>
      <div className={styles.location}>bordeaux, france</div>
    </div>
    <div>
      <div className={styles.priceColomn}>
        <div className={styles.price}>S$ 75.00</div>
        <button className={styles.quantity}>
          2 <br />
          left
        </button>
      </div>
      <div className={styles.btnColomn}>
        <button className={styles.button} onClick={addItem}>
          add to cart
        </button>
        <img
          src={bookmark}
          alt="bookmark"
          className={styles.bookmark}
          onClick={addBookmark}
        />
      </div>
    </div>
  </div>
</div>
*/
