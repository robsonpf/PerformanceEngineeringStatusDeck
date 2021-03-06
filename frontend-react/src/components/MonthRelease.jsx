import React, { useState } from "react";
import { Dropdown, Icon, Input } from "semantic-ui-react";

const MonthRelease = (props) => {
  const [editSwitch, setEditSwitch] = useState(false);

  const handleRenameMonth = (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        
      }
    }
  };

  return (
    <div id="month-release">
      <h3 className="headers">
        <div></div>
        <div>
          {editSwitch ? (
            <div className="ui transparent input">
              <input
                onKeyPress={(e) => handleRenameMonth(e)}
                style={{ color: 'white', textAlign: 'center' }}
                placeholder="Month Name"
              type="text" />
            </div>
          ) : (
            `MONTH Release`
          )}
        </div>
        <div>
          <Dropdown icon="bars">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setEditSwitch(!editSwitch)}
                icon="edit"
                text="Rename month"
              />
              <Dropdown.Item icon="plus" text="Add project" />
              <Dropdown.Item icon="trash" text="Delete slide" />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </h3>
      <div id="details">
        <h4 id="key-callouts">Key Callouts:</h4>
        &#x25CF; P&T_PO_32 Boost XP I
      </div>
      <h3 className="headers">Risk & Mitigation</h3>
      <div id="risk-details"></div>
    </div>
  );
};

export default MonthRelease;
