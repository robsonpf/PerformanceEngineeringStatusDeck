import React, { useState } from 'react';
import { Dropdown, Icon, Input } from "semantic-ui-react";



const MonthRelease = (props) => {
  const [ editSwitch, setEditSwitch ] = useState(false);

  const handleRenameMonth = () => {

  }
  console.log(editSwitch);
  return (
    <div id="month-release">
      <h3 className="headers">
        <div></div>
        <div>
          { editSwitch ? <Input style={{color:"white"}} transparent placeholder="Month Name" /> : `MONTH Release` }
        </div>
        <div>
          <Dropdown icon="bars">
            <Dropdown.Menu>
              <Dropdown.Item onClick={ () => setEditSwitch(!editSwitch) } icon="edit" text="Rename month"/>
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
