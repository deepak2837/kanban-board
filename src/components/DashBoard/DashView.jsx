import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./DashView.css";
import Card from "../Card/Card";
const getPriorityIcon = (priority) => {
  console.log(priority);
  if (priority === 0) {
    return null; // Return null for priority 0
  }

  let imageSrc;
  let imageSize = "20px";
  switch (priority) {
   
    case 1:
      imageSrc = "https://i.ibb.co/wsd9HCd/1.jpg";
      break;
    case 2:
      imageSrc = "https://i.ibb.co/DR9RdNh/2.jpg";
      break;
    case 3:
      imageSrc = "https://i.ibb.co/sv5t17M/3.jpg";
      break;
    case 4:
      imageSrc = "https://i.ibb.co/q7JSyhG/urgent.jpg";
      break;
    // Provide a default image for unknown priority levels
  }

  return <img src={imageSrc} width={imageSize} height={imageSize}/>;
};


const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  {!user ? (
                    getPriorityIcon(index) 
                  ) : (
                    <>
                      <div
                        className="imageContainer relative"
                        style={{ width: "15px", height: "15px", display: 'inline-block' }}
                      >
                        {/* ... (other code) */}
                      </div>
                    </>
                  )}
                  <span>
                      {elem[index]?.title} {elem[index]?.value?.length}
                  </span>
                </div>
                <div className="rightView" style={{ marginRight: "10px" }}>
                  <FontAwesomeIcon icon={faPlus} /> <span style={{ letterSpacing: "2px" }}> {elem[index]?.priority}</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((elem, ind) => {
                  return (
                    <Card id={elem.id} title={elem.title} tag={elem.tag} status= {elem.status} priority= {elem.priority}/>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;