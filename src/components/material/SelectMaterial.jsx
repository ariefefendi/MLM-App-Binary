import React from "react";

const material = (props) => {
    let R = props.material;
    let size = R.size;
    let class = R.class;
    let type = R.type;
    let placeholder = R.placeholder;
    let id = R.id;
    let label = R.label;
    let valed = R.valed;
  return (
    <>          
        {/* <div className={"form-group form-floating mb-3 "{valed} }>                  
            <Form.Control
                size={{ size }}
                id={{ id }}
                value={{value}}
                className={"form-control "+{ class }}
                type={{ type }}
                placeholder={{ placeholder }} />
                <label className="form-control-label">{{ label }}</label>
        </div> */}
    </>
  );
};

export default material;
