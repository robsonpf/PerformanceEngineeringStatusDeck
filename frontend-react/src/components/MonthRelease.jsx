import React from 'react';
import { Dropdown, Icon } from "semantic-ui-react";

const MonthRelease = (props) => {
  return (
    <div id="month-release">
      <h3 className="headers">
        <div>

        </div>
        <div>
          {`MONTH Release`}
        </div>
        <div>
          <Dropdown icon="bars">
            <Dropdown.Menu>
              <Dropdown.Item icon="edit" text="Rename month"/>
              <Dropdown.Item icon="plus" text="Add project"/>
              <Dropdown.Item icon="trash" text="Delete slide"/>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </h3>
      <div id="details">
        <h4 id="key-callouts">Key Callouts:</h4>
        &#x25CF; P&T_PO_32 Boost XP I
      </div>
      <h3 className="headers">
        Risk & Mitigation
      </h3>
      <div id="risk-details">

      </div>
    </div>
  )
};

export default MonthRelease;
