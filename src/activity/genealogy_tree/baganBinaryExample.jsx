import React, { useEffect } from "react";
import $ from "jquery";
import "./css/bagan.css";

function App() {
  // get data

  useEffect(() => {
    // $(".genealogy_tree ul").hide();
    // $(".genealogy_tree>ul").show();
    // $(".genealogy_tree ul.active").show();
    // $(".genealogy_tree li").on("click", function (e) {
    //   var children = $(this).find("> ul");
    //   if (children.is(":visible")) children.hide("fast").removeClass("active");
    //   else children.show("fast").addClass("active");
    //   e.stopPropagation();
    // });
  }, []);

  // var i = 0;
  // var per = 0;
  // var total = 100;
  // if (total > 0) {
  //   array.forEach((element) => {
  //     return (
        // <li>
        //   <a href="#" onClick={(e) => e.preventDefault()}>
        //     <div className="member-view-box">
        //       <div className="member-image">
        //         <img
        //           src="https://image.flaticon.com/icons/svg/145/145867.svg"
        //           alt="Member"
        //         />
        //         <div className="member-details">
        //           <h3>John Doe</h3>
        //         </div>
        //       </div>
        //     </div>
        //   </a>
        // </li>
  //     );
  //   });
  // }

  return (
    <div className="body genealogy-body genealogy-scroll">
      <div className="genealogy_tree">
        <ul>
          {/* {myArray.map((name) => ( */}
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <div className="member-view-box">
                  <div className="member-image">
                    <img
                      src="https://image.flaticon.com/icons/svg/145/145867.svg"
                      alt="Member"
                    />
                    <div className="member-details">
                      <h3>John Doe</h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
